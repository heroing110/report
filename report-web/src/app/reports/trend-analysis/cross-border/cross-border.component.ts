import {Component, OnInit, ViewChild} from '@angular/core';
import {TrendService} from '../../../shared/trend.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cross-border',
  templateUrl: './cross-border.component.html',
  styleUrls: ['./cross-border.component.less']
})
export class CrossBorderComponent implements OnInit {

  trendConfigs: ColumnItem[];
  getTrendTableDataFn: GetTableDataFn;

  @ViewChild('dataChart')
  dataChart: DataChartComponent; // 交易量图

  dateRange: Date[] = [];
  param: { totalVolume, increaseVolume, increaseVolumePercent };
  private indexType = '跨境电商交易额';

  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendConfigs = this.createColumnConfigs();

    this.getTrendTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.trendService.pagingTrendListView({
        ...date,
        indexType: this.indexType,
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  getParam() {
    const date = this.getDateRangeParam();
    this.trendService.getTrendLineParam({
      volumeType: this.indexType,
      ...date
    }).then(res => {
      this.param = res.data;
    });
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
      tooltip: {
        trigger: 'axis'
      },
      yAxis: {
        name: '亿元',
        type: 'value'
      },
      series: [{
        data: lineDataList,
        type: 'line',
        name: '交易额'
      }]
    };
    this.dataChart.setOption(lineOption);
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendLineData({
      indexType1: this.indexType,
      ...date,
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'totalVolume', title: '交易额'},
      {
        column: 'totalMum', title: '环比',
        formatter: (row, val) => {
          return `${val || 0}%`;
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
