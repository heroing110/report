import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CommonDataService} from '../../../shared/common-data.service';
import {find, map} from 'lodash';
import * as echarts from 'echarts';
import * as moment from 'moment';
import {LocalProductService} from '../../../shared/local-product.service';

@Component({
  selector: 'app-emphases',
  templateUrl: './emphases.component.html',
  styleUrls: ['./emphases.component.less']
})
export class EmphasesComponent implements OnInit, AfterViewInit {

  slaesConfigs: ColumnItem[];
  getSlaesTableDataFn: GetTableDataFn;

  @ViewChild('salesDataChart1')
  salesDataChart1: DataChartComponent; // 交易量图

  @ViewChild('salesDataChart2')
  salesDataChart2: DataChartComponent; // 线上渠道销售额占比

  @ViewChild('salesDataChart3')
  salesDataChart3: DataChartComponent; // 区域销售额占比

  dateRange: Date[] = [];

  param: { totalVolume, increaseTotal };

  catList: OptionItem[];
  categoryName: string;

  platformList: OptionItem[];
  legendData: string[];
  private dateAreaStr: string;

  constructor(private localProductService: LocalProductService,
              private commonDataService: CommonDataService) {
  }

  ngOnInit() {
    this.slaesConfigs = this.createColumnConfigs();

    this.getSlaesTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.localProductService.pagingListview({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };

    this.localProductService.getCatname().then(result => {
      this.catList = result.data;
    });
  }

  getParam() {
    const date = this.getDateRangeParam();
    this.localProductService.lineParam({
      ...date,
      catName: this.categoryName || null
    }).then(res => {
      this.param = res.data;
    });
  }

  async ngAfterViewInit() {
    this.platformList = (await this.commonDataService.getPlatformList()).data;
    this.legendData = map(this.platformList, 'value');
  }

  async setChartOption() {
    const lineSourceData = (await this.getLineChartData()).data;

    const lineCategoryList = [], lineDataList = [];
    for (let i = 0; i < lineSourceData.length; i++) {
      const data = lineSourceData[i];
      lineCategoryList.push(data.dateStr);
      lineDataList.push(data.totalVolume);
    }

    const lineOption = {
      xAxis: {
        type: 'category',
        data: lineCategoryList
      },
      tooltip: {trigger: 'axis'},
      yAxis: {
        name: '元',
        type: 'value'
      },
      series: [{
        data: lineDataList,
        type: 'line',
        smooth: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#8ec6ad'
            }, {
              offset: 1,
              color: '#ffe'
            }])
          }
        },
      }]
    };
    this.salesDataChart1.setOption(lineOption);


    const platformData = (await this.getPlatformPieData()).data;
    const provinceData = (await this.getProvincePie()).data;

    const datas = [];
    let totalVolume = 0;
    for (let i = 0; i < this.legendData.length; i++) {
      const name = this.legendData[i];
      const data: CategoryAndShopDataItem = find(platformData, {platform: name}) || {};
      datas.push({
        value: data.totalVolume || 0,
        name: name
      });
      totalVolume += data.totalVolume || 0;
    }

    const platformPieOption = {
      title: {
        text: `销售额 \n ${totalVolume.toFixed(1)}`,
        y: 'center',
        x: 'center',
        textStyle: {align: 'center'}
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: 30,
        top: 20,
        data: this.legendData
      },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {show: false},
            emphasis: {show: false}
          },
          labelLine: {normal: {show: false}},
          data: datas
        }
      ]
    };

    this.salesDataChart2.setOption(platformPieOption);

    const province_datas = [];
    let province_totalVolume = 0;
    for (let i = 0; i < provinceData.length; i++) {
      const data: CategoryAndShopDataItem = provinceData[i];
      province_datas.push({
        value: data.totalVolume || 0,
        name: data.province
      });
      province_totalVolume += data.totalVolume || 0;
    }

    const provincePieOption = {
      title: {
        text: `销售额 \n ${province_totalVolume.toFixed(1)}`,
        y: 'center',
        x: 'center',
        textStyle: {align: 'center'}
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        type: 'scroll',
        right: 30,
        top: 20,
        data: map(province_datas, 'name')
      },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {show: false},
            emphasis: {show: false}
          },
          labelLine: {normal: {show: false}},
          data: province_datas
        }
      ]
    };

    this.salesDataChart3.setOption(provincePieOption);
  }

  getProvincePie(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.localProductService.queryProvincePie({
      ...date,
      catName: this.categoryName || null
    });
  }

  getPlatformPieData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.localProductService.queryPlatformPie({
      ...date,
      catName: this.categoryName || null
    });
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.localProductService.queryLine({
      catName: this.categoryName,
      ...date
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: () => {
          return this.dateAreaStr;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'catName', title: '商品名称'},
      {column: 'totalCount', title: '销售量'},
      {column: 'totalVolume', title: '销售额'},
    ];

    return configs;
  }

  private getDateRangeParam() {
    const param = {
      dateBegin: void 0,
      dateEnd: void 0,
    };
    if (this.dateRange && this.dateRange.length === 2) {
      const [s, e] = [
        moment(this.dateRange[0]).format('YYYY-MM'),
        moment(this.dateRange[1]).format('YYYY-MM')
      ];
      param.dateBegin = `${s}-01`;
      param.dateEnd = `${e}-02`;
      this.dateAreaStr = `${s}-${e}`;
    }
    return param;
  }

}
