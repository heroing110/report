import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem, CategoryService} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CommonDataService} from '../../../shared/common-data.service';
import * as moment from 'moment';
import {find, map} from 'lodash';

@Component({
  selector: 'app-whole',
  templateUrl: './whole.component.html',
  styleUrls: ['./whole.component.less']
})
export class WholeComponent implements OnInit, AfterViewInit {
// 销售额
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额 表格数据的服务

  @ViewChild('salesDataChart1')
  salesDataChart1: DataChartComponent;
  @ViewChild('salesDataChart2')
  salesDataChart2: DataChartComponent;

  @ViewChild('countDataChart1')
  countDataChart1: DataChartComponent;
  @ViewChild('countDataChart2')
  countDataChart2: DataChartComponent;

  categoryList: OptionItem[];
  legendData: string[];

  dateRange: Date[] = [];

  salesPlatform = ''; // 销售额占比的平台
  countPlatform = ''; // 销量占比的平台

  loading = false;
  loading2 = false;

  constructor(private categoryService: CategoryService,
              private commonDataService: CommonDataService) {
  }

  ngOnInit() {
    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.categoryService.pagingCatView({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async ngAfterViewInit() {
    this.categoryList = (await this.commonDataService.getCategoryList()).data;

    this.legendData = map(this.categoryList, 'value');
  }

  async setChartOption() {

    this.loading = true;
    const dataList = (await this.getChartData(this.salesPlatform)).data;

    const datas = [];
    let totalVolume = 0;
    for (let i = 0; i < this.legendData.length; i++) {
      const name = this.legendData[i];
      const data: CategoryAndShopDataItem = find(dataList, {sCat1Name: name}) || {};
      datas.push({
        value: data.totalVolume || 0,
        name: name
      });
      totalVolume += data.totalVolume || 0;
    }

    const pieOption = {
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

    this.salesDataChart1.setOption(pieOption);

    const barOption = {
      xAxis: {
        type: 'category',
        data: this.legendData
      },
      tooltip: {
        formatter: '{a} <br> {b}:{c}%'
      },
      yAxis: [{
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0,
          showMinLabel: true,
          formatter: '{value} %'
        },
        min: 0,
        max: 100
      }],
      series: [{
        name: '销售额',
        data: (function () {
          // 将销售额根据总和转换为比例
          return map(datas, 'value').map(function (value) {
            return (value / totalVolume * 100);
          });
        }()),
        type: 'bar'
      }]
    };
    this.salesDataChart2.setOption(barOption);
    this.loading = false;
  }

  async setChartOption2() {

    this.loading2 = true;
    const dataList = (await this.getChartData(this.countPlatform)).data;

    const datas = [];
    let totalCount = 0;
    for (let i = 0; i < this.legendData.length; i++) {
      const name = this.legendData[i];
      const data: CategoryAndShopDataItem = find(dataList, {sCat1Name: name}) || {};
      datas.push({
        value: data.totalCount || 0,
        name: name
      });
      totalCount += data.totalCount || 0;
    }

    const pieOption = {
      title: {
        text: `销售量 \n ${totalCount}`,
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
          name: '销量',
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

    this.countDataChart1.setOption(pieOption);

    const barOption = {
      xAxis: {type: 'category', data: this.legendData},
      tooltip: {
        formatter: '{a} <br> {b}:{c}%'
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0,
          showMinLabel: true,
          formatter: '{value} %'
        },
        min: 0,
        max: 100
      },
      series: [{
        name: '销售量',
        data: (function () {
          // 将销量根据销量总和转换为比例
          return map(datas, 'value').map(function (value) {
            return (value / totalCount * 100);
          });
        }()),
        type: 'bar'
      }]
    };
    this.countDataChart2.setOption(barOption);
    this.loading2 = false;
  }

  getChartData(platform): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.categoryService.catWholeList({
      platform: platform || void 0,
      ...date,
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: (row: CategoryAndShopDataItem) => {
          return `${row.year || ''}-${row.month || ''}`;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'sCat1Name', title: '品类'},
      {
        column: 'salesPercent', title: '销售额占比',
        formatter: (row, value) => {
          return `${value || 0}%`;
        }
      },
      {
        column: 'countPercent', title: '销售量占比',
        formatter: (row, value) => {
          return `${value || 0}%`;
        }
      },
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
