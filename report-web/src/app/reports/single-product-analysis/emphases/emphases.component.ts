import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {ProductService} from '../../../shared/product.service';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CommonDataService} from '../../../shared/common-data.service';
import {find, map} from 'lodash';
import * as echarts from 'echarts';
import * as moment from 'moment';

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

  platformList: OptionItem[];
  legendData: string[];

  constructor(private productService: ProductService,
              private commonDataService: CommonDataService) {
  }

  ngOnInit() {
    this.slaesConfigs = this.createColumnConfigs();

    this.getSlaesTableDataFn = (pageIndex, pageSize) => {
      return this.productService.pagingProductView({
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  async ngAfterViewInit() {
    this.platformList = (await this.commonDataService.getPlatformList()).data;
    this.legendData = map(this.platformList, 'value');
    this.setChartOption();
  }

  async setChartOption() {
    const lineSourceData = (await this.getLineChartData()).data;

    const lineCategoryList = [], lineDataList = [];
    for (let i = 0; i < lineSourceData.length; i++) {
      const data = lineSourceData[i];
      lineCategoryList.push(data.data);
      lineDataList.push(data.totalVolume);
    }

    const lineOption = {
      xAxis: {
        type: 'category',
        data: lineCategoryList
      },
      tooltip: {},
      yAxis: {
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


    const platformData = (await this.getChartData('PLATFORM')).data;
    const provinceData = (await this.getChartData('PROVINCE')).data;

    const datas = [];
    let totalVolume = 0;
    for (let i = 0; i < this.legendData.length; i++) {
      const name = this.legendData[i];
      const data: CategoryAndShopDataItem = find(platformData, {type: name}) || {};
      datas.push({
        value: data.totalVolume || 0,
        name: name
      });
      totalVolume += data.totalVolume || 0;
    }

    const platformPieOption = {
      title: {
        text: `销售额 \n ${totalVolume}`,
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
        name: data.type
      });
      province_totalVolume += data.totalVolume || 0;
    }

    const provincePieOption = {
      title: {
        text: `销售额 \n ${province_totalVolume}`,
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

  getChartData(type): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const [s, e] = this.dateRange;
    return this.productService.getProductPie({
      type: type,
      dateBegin: `${moment(s).format('YYYY-MM')}-01`,
      dateEnd: `${moment(e).format('YYYY-MM')}-02`
    });
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const [s, e] = this.dateRange;
    return this.productService.getProductLine({
      dateBegin: `${moment(s).format('YYYY-MM')}-01`,
      dateEnd: `${moment(e).format('YYYY-MM')}-02`
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: (row: CategoryAndShopDataItem) => {
          return `${row.year || ''}-${row.month || ''}`;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'productName', title: '商品名称'},
      {column: 'salesCount', title: '销售量'},
      {column: 'salesVolume', title: '销售额'},
    ];

    return configs;
  }

}
