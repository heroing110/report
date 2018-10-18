import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {TrendService} from '../../../shared/trend.service';
import * as moment from 'moment';

@Component({
  selector: 'app-enterprises-and-employment',
  templateUrl: './enterprises-and-employment.component.html',
  styleUrls: ['./enterprises-and-employment.component.less']
})
export class EnterprisesAndEmploymentComponent implements OnInit {

  trendConfigs: ColumnItem[];
  getTrendTableDataFn: GetTableDataFn;

  @ViewChild('dataChart')
  dataChart: DataChartComponent; // 交易量图

  dateRange: Date[] = [];

  param: {
    totalVolume, increaseVolume, increaseVolumePercent,
    totalCount, increaseCount, increaseCountPercent
  };

  private indexType1 = '电子商务店铺数';
  private indexType2 = '电子商务从业人数';

  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendConfigs = this.createColumnConfigs();

    this.getTrendTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.trendService.pagingTrendAreaQysListView({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  getParam() {
    const date = this.getDateRangeParam();
    this.trendService.getTrendLineParam({
      doubleParam: true,
      companyAndPerson: true,
      ...date
    }).then(res => {
      this.param = res.data;
    });
  }

  async setChartOption() {
    const lineSourceData = (await this.getLineChartData()).data;

    const lineCategoryList = [],
      lineVolumeList = [],
      lineCountList = [];
    for (let i = 0; i < lineSourceData.length; i++) {
      const data = lineSourceData[i];
      lineCategoryList.push(data.dateStr);
      lineVolumeList.push(data.totalVolume || 0);
      lineCountList.push(data.totalCount || 0);
    }

    const lineOption = {
      xAxis: {
        type: 'category',
        data: lineCategoryList
      },
      tooltip: {
        trigger: 'axis'
      },
      yAxis: [
        {name: '个', type: 'value'},
        {name: '人', type: 'value'},
      ],
      series: [{
        data: lineVolumeList,
        yAxisIndex: 0,
        type: 'line',
        name: this.indexType1
      }, {
        data: lineCountList,
        yAxisIndex: 1,
        type: 'line',
        name: this.indexType2
      }]
    };
    this.dataChart.setOption(lineOption);
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendLineData({
      indexType1: this.indexType1,
      indexType2: this.indexType2,
      ...date
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'province', title: '省份'},
      {column: 'city', title: '城市'},
      {column: 'qys', title: '电商店铺数'},
      // {column: 'qysmom', title: '电商企业数环比'},
      {column: 'cyrs', title: '电商从业人数'},
      // {column: 'cyrsmom', title: '电商从业人数环比'}
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
