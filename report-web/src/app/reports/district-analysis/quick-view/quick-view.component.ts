import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import * as moment from 'moment';
import {groupBy, map} from 'lodash';
import {HomeService} from '../../../shared/home.service';
import {TrendService} from '../../../shared/trend.service';
import {CommonDataService} from '../../../shared/common-data.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  loading = false;
  categoryList: OptionItem[];
  category = '';

  constructor(private homeService: HomeService,
              private commonDataService: CommonDataService,
              private trendService: TrendService) {
  }

  ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.homeService.pagingAreaListview({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };

    this.commonDataService.getIndexTypeList().then(res => {
      this.categoryList = res.data;
    });
  }

  async setChartOption() {
    this.loading = true;

    // 所有的数据
    const dataList = (await this.getChartData()).data;

    // 按照一级品类分组
    const groupData = groupBy(dataList, 'city');

    const citys = Object.keys(groupData);

    const options = [];

    for (let i = 0; i < citys.length; i++) {
      const list = groupData[citys[i]] || [];
      const dates = map(list, 'dateStr');

      // 生产所有的配置
      options.push({
        xAxis: [
          {
            type: 'category',
            data: dates,
            splitLine: {show: false}
          }
        ],

        yAxis: {type: 'value'},
        series: [
          {
            name: '交易额',
            type: 'line',
            data: map(list, 'totalVolume')
          }
        ]
      });
    }

    const option = {
      baseOption: {
        timeline: {
          controlStyle: {
            showPlayBtn: false,
            show: true
          },
          data: citys,
          axisType: 'category'
        },
        tooltip: {trigger: 'axis'},
        calculable: true,
        grid: {
          top: 80,
          bottom: 100
        }
      },
      options: options
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendCityLineData({
      indexType: this.category || void 0,
      ...date
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
      {column: 'city', title: '市'},
      {column: 'mom', title: '指标值'},
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
