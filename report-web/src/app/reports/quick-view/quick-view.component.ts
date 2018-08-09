import {Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../shared/data-chart/data-chart.component';
import {ColumnItem, DataTableComponent} from '../../shared/data-table/data-table.component';
import {CategoryService} from '../../shared/category.service';
import {HomeService, StaTotal} from '../../shared/home.service';
import {ChainMapService} from '../../shared/chain-map.service';
import * as moment from 'moment';
import {chain} from 'lodash';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit {

  dateRange: Date[];

  // 1全国排名, 2全省排名
  sortType = 1;

  // 电子商务市场结构
  electronPlatformList: OptionItem[] = [
    {label: '交易类型', value: '1'},
    {label: '进口/出口', value: '2'},
    {label: '服务/实物', value: '3'},
    {label: '城市/农村', value: '4'},
  ];
  electronPlatform = '1';

  // 网络零售热销品类TOP30
  hotPlatform = '';

  @ViewChild('dataTable')
  dataTable: DataTableComponent; // 表格

  @ViewChild('dataChart1')
  dataChart1: DataChartComponent; // 排名
  sortDataList = [];// 排序列表

  @ViewChild('dataChart2')
  dataChart2: DataChartComponent; // 电子商务市场结构

  @ViewChild('dataChart3')
  dataChart3: DataChartComponent; // 主要电商平台交易额走势

  tableConfigs: ColumnItem[];
  getTableDataFn: GetTableDataFn;

  // 统计前五项
  staListBefore: StaTotal[] = [];

  // 后所有项
  staListAfter: StaTotal[] = [];

  electronLoading = false;
  top30Loading = false;
  mainElectronLoading = false;

  constructor(private categoryService: CategoryService,
              private homeService: HomeService,
              private chainMapService: ChainMapService) {
  }

  ngOnInit() {

    this.tableConfigs = this.createColumnConfigs();

    this.getTableDataFn = (pageIndex, pageSize) => {
      this.top30Loading = true;
      const date = this.getDateRangeParam();
      return this.homeService.pagingHomeTop30({
        ...date,
        platform: this.hotPlatform || void 0,
        pageNo: pageIndex,
        pageSize: pageSize
      }).then(result => {
        this.top30Loading = false;
        return result;
      });
    };
  }

  queryData() {
    const date = this.getDateRangeParam();
    this.homeService.homeIndex({
      ...date
    }).then((result) => {
      const list = result.data || [];
      this.staListBefore = list.slice(0, 5);
      this.staListAfter = list.slice(5);
    });
  }

  // 地图排序
  async setChartOption1(sortType?: number) {
    if (sortType) {
      this.sortType = sortType;
    }
    const dateRangeParam = this.getDateRangeParam();
    let mapType = '';
    const datas = [];
    if (this.sortType === 1) {// 全国排序
      mapType = 'china';
      this.chainMapService.loadChinaMap();
      const result = (await this.homeService.homeCountryRank({
        ...dateRangeParam
      })).data;
      for (let i = 0; i < result.length; i++) {
        const data: StaTotal = result[i];
        if (data.province.endsWith('省')) {
          // 如果最后一个字是省，则将它抹掉
          data.province = data.province.slice(0, -1);
        }

        datas.push({
          name: data.province,
          value: data.total
        });
      }
    } else {
      mapType = '广东';
      this.chainMapService.loadProvinceMap(mapType);
      const result = (await this.homeService.homeProvinceRank({
        ...dateRangeParam,
        province: '广东省'
      })).data;

      for (let i = 0; i < result.length; i++) {
        const data: StaTotal = result[i];
        datas.push({
          name: data.city,
          value: data.total
        });
      }
    }

    // 排序，取前9个
    this.sortDataList = chain(datas).sortBy('total').value().slice(0, 9);

    const max = chain(datas).map('value').max().value();
    const option = {
      tooltip: {
        trigger: 'item'
      },
      toolbox: {show: false},
      visualMap: {
        show: false,
        min: 0,
        // 按照千位向上取整
        max: Math.ceil(max / 1000) * 1000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: [
        {
          name: '地图排序',
          type: 'map',
          mapType: mapType,
          itemStyle: {
            normal: {label: {show: false}},
            emphasis: {label: {show: true}}
          },
          data: datas,
        }
      ]
    };

    this.dataChart1.setOption(option);
  }

  async setChartOption2() {
    this.electronLoading = true;

    const datePram = this.getDateRangeParam();
    const data = (await this.homeService.homeBusinessPie({
      ...datePram,
      type: +this.electronPlatform
    })).data;

    const datas = [];
    const legendData = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      legendData.push(item.type);
      datas.push({
        name: item.type,
        value: item.total || 0
      });
    }

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        align: 'left',
        data: legendData
      },
      toolbox: {show: false},
      series: [
        {
          name: '电子商务市场结构',
          type: 'pie',
          center: ['40%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: datas
        }
      ]
    };

    this.dataChart2.setOption(option);

    this.electronLoading = false;
  }

  // 主要电商平台交易额走势
  async setChartOption3() {
    this.mainElectronLoading = true;

    const dateParam = this.getDateRangeParam();
    const data = (await this.homeService.homeBusinessLine({...dateParam})).data;

    const xAxisData = chain(data).map('dateStr').value();

    const option = {
      tooltip: {trigger: 'axis'},
      toolbox: {show: false},
      legend: {
        right: 0,
        data: ['天猫', '京东']
      },
      xAxis: {
        data: xAxisData
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      dataZoom: [{
        startValue: xAxisData[0]
      }, {
        type: 'inside'
      }],
      series: [
        {
          name: '天猫',
          type: 'line',
          data: chain(data).map('totalVolume').value()
        },
        {
          name: '京东',
          type: 'line',
          data: chain(data).map('totalVolume1').value()
        }
      ]
    };

    this.dataChart3.setOption(option);
    this.mainElectronLoading = false;
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'row', title: '排名',
        formatter: (data, value, index) => {
          const startIndex = (this.dataTable.pageIndex - 1) * this.dataTable.pageSize;
          return startIndex + index + 1;
        }
      },
      {column: 'cat2Name', title: '品类'},
      {column: 'totalCount', title: '销量'},
      {column: 'totalVolume', title: '销售额', sort: true}
    ];

    return configs;
  }

  private getDateRangeParam() {
    const param = {
      dateBegin: void 0,
      dateEnd: void 0,
    };
    if (this.dateRange && this.dateRange.length === 2) {
      const [s, e] = this.dateRange;
      param.dateBegin = `${moment(s).format('YYYY-MM')}-01`;
      param.dateEnd = `${moment(e).format('YYYY-MM')}-02`;
    }
    return param;
  }

}
