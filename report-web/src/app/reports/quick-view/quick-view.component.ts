import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../shared/data-chart/data-chart.component';
import {ColumnItem, DataTableComponent} from '../../shared/data-table/data-table.component';
import {CategoryService} from '../../shared/category.service';
import {HomeService, StaTotal} from '../../shared/home.service';
import * as moment from 'moment';
import {ChainMapService} from '../../shared/chain-map.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit, AfterViewInit {

  dateRange: Date[];

  sortType = 1; // 1全国排名, 2全省排名

  // 电子商务市场结构
  electronPlatformList: OptionItem[] = [
    {label: '交易类型', value: '交易类型'},
    {label: '进口/出口', value: '进口/出口'},
    {label: '服务/实物', value: '服务/实物'},
    {label: '城市/农村', value: '城市/农村'},
  ];
  electronPlatform = '';

  // 网络零售热销品类TOP30
  hotPlatform = '';

  @ViewChild('dataTable')
  dataTable: DataTableComponent; // 表格

  @ViewChild('dataChart1')
  dataChart1: DataChartComponent; // 排名

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
              private chainMap: ChainMapService) {
  }

  ngOnInit() {
    // 注册中国地图数据
    DataChartComponent.registerMap('chainMap', this.chainMap.getJSON());

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

  ngAfterViewInit() {
    this.setChartOption1();
    this.setChartOption2();
    this.setChartOption3();
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
  setChartOption1() {
    const option = {
      tooltip: {
        trigger: 'item'
      },
      toolbox: {show: false},
      visualMap: {
        show: false,
        min: 800,
        max: 50000,
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
          mapType: 'chainMap',
          itemStyle: {
            normal: {label: {show: true}},
            emphasis: {label: {show: true}}
          },
          data: [
            {name: '北京', value: Math.round(Math.random() * 2000)},
            {name: '天津', value: Math.round(Math.random() * 2000)},
            {name: '上海', value: Math.round(Math.random() * 2000)},
            {name: '重庆', value: Math.round(Math.random() * 2000)},
            {name: '河北', value: 0},
            {name: '河南', value: Math.round(Math.random() * 2000)},
            {name: '云南', value: 5},
            {name: '辽宁', value: 305},
            {name: '黑龙江', value: Math.round(Math.random() * 2000)},
            {name: '湖南', value: 200},
            {name: '安徽', value: Math.round(Math.random() * 2000)},
            {name: '山东', value: Math.round(Math.random() * 2000)},
            {name: '新疆', value: Math.round(Math.random() * 2000)},
            {name: '江苏', value: Math.round(Math.random() * 2000)},
            {name: '浙江', value: Math.round(Math.random() * 2000)},
            {name: '江西', value: Math.round(Math.random() * 2000)},
            {name: '湖北', value: Math.round(Math.random() * 2000)},
            {name: '广西', value: Math.round(Math.random() * 2000)},
            {name: '甘肃', value: Math.round(Math.random() * 2000)},
            {name: '山西', value: Math.round(Math.random() * 2000)},
          ],
        }
      ]
    };

    this.dataChart1.setOption(option);
  }

  setChartOption2() {
    this.electronLoading = true;
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      toolbox: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
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
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ]
        }
      ]
    };

    this.dataChart2.setOption(option);

    this.electronLoading = false;
  }

  // 主要电商平台交易额走势
  setChartOption3() {
    this.mainElectronLoading = true;
    const option = {
      tooltip: {trigger: 'axis'},
      toolbox: {show: false},
      legend: {
        right: 0,
        data: ['天猫', '京东']
      },
      xAxis: {
        data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05']
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      dataZoom: [{
        startValue: '2014-06-01'
      }, {
        type: 'inside'
      }],
      series: [
        {
          name: '天猫',
          type: 'line',
          data: [1, 3, 2, 4, 1]
        },
        {
          name: '京东',
          type: 'line',
          data: [4, 6, 8, 2, 1]
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
