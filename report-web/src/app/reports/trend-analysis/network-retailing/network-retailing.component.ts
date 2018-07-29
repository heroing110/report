import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {TrendService} from '../../../shared/trend.service';
import * as moment from 'moment';


@Component({
  selector: 'app-network-retailing',
  templateUrl: './network-retailing.component.html',
  styleUrls: ['./network-retailing.component.less']
})
export class NetworkRetailingComponent implements OnInit, AfterViewInit {

  trendConfigs: ColumnItem[];
  getTrendTableDataFn: GetTableDataFn;

  @ViewChild('dataChart')
  dataChart: DataChartComponent; // 交易量图

  dateRange: Date[] = [];

  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendConfigs = this.createColumnConfigs();

    this.getTrendTableDataFn = (pageIndex, pageSize) => {
      return this.trendService.pagingTrendListView({
        indexType1: '交易额',
        indexType2: '交易量',
        pageNo: pageIndex,
        pageSize: pageSize,
      });
    };
  }

  async ngAfterViewInit() {
    this.setChartOption();
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
      yAxis: {
        type: 'value'
      },
      series: [{
        data: lineVolumeList,
        type: 'line',
        name: '交易额'
      }, {
        data: lineCountList,
        type: 'line',
        name: '交易量'
      }]
    };
    this.dataChart.setOption(lineOption);
  }

  getLineChartData(): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const [s, e] = this.dateRange;
    return this.trendService.getTrendLineData({
      indexType1: '交易额',
      indexType2: '交易量',
      dateBegin: `${moment(s).format('YYYY-MM')}-01`,
      dateEnd: `${moment(e).format('YYYY-MM')}-02`
    });
  }

  private createColumnConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'totalVolume', title: '交易额'},
      {
        column: 'totalMum', title: '交易额环比',
        formatter: (row, val) => {
          return `${val || 0}%`;
        }
      },
      {column: 'totalCount', title: '交易量'},
      {
        column: 'totalCountMum', title: '交易量环比',
        formatter: (row, val) => {
          return `${val || 0}%`;
        }
      },
    ];

    return configs;
  }

}
