import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {TrendService} from '../../../shared/trend.service';
import * as moment from 'moment';

@Component({
  selector: 'app-network-sell-out',
  templateUrl: './network-sell-out.component.html',
  styleUrls: ['./network-sell-out.component.less']
})
export class NetworkSellOutComponent implements OnInit {

  trendConfigs: ColumnItem[];
  getTrendTableDataFn: GetTableDataFn;

  @ViewChild('dataChart')
  dataChart: DataChartComponent; // 交易量图

  dateRange: Date[] = [];

  param: {
    totalVolume, increaseVolume, increaseVolumePercent,
    totalCount, increaseCount, increaseCountPercent
  };

  private indexType1 = '网络零售卖出额';
  private indexType2 = '网络零售交易量';

  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendConfigs = this.createColumnConfigs();

    this.getTrendTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.trendService.pagingTrendListView({
        ...date,
        indexType: this.indexType1,
        indexType2: this.indexType2,
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  getParam() {
    const date = this.getDateRangeParam();
    this.trendService.getTrendLineParam({
      volumeType: this.indexType1,
      countType: this.indexType2,
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
        {name: '亿元', type: 'value'},
        {type: 'value'},
      ],
      series: [{
        data: lineVolumeList,
        yAxisIndex: 0,
        type: 'line',
        name: '卖出额'
      }, {
        data: lineCountList,
        yAxisIndex: 1,
        type: 'line',
        name: '交易量'
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
      {column: 'totalVolume', title: '卖出额'},
      // {
      //   column: 'totalMum', title: '交易额环比',
      //   formatter: (row, val) => {
      //     return `${val || 0}%`;
      //   }
      // },
      {column: 'totalCount', title: '交易量'},
      // {
      //   column: 'totalCountMum', title: '交易量环比',
      //   formatter: (row, val) => {
      //     return `${val || 0}%`;
      //   }
      // },
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
