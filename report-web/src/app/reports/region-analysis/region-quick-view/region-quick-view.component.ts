import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import * as moment from 'moment';
import {groupBy, map} from 'lodash';
import {HomeService} from '../../../shared/home.service';

@Component({
  selector: 'app-region-quick-view',
  templateUrl: './region-quick-view.component.html',
  styleUrls: ['./region-quick-view.component.less']
})
export class RegionQuickViewComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  categoryList: OptionItem[];

  constructor(private homeService: HomeService) {
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

    this.categoryList = [
      {label: 'B2B', value: 'B2B'},
      {label: '网络零售', value: '网络零售'},
    ];
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
        // dataZoom: [{
        //   startValue: dates[0]
        // }, {
        //   type: 'inside'
        // }],
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
        },
        yAxis: {type: 'value'}
      },
      options: options
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.homeService.areaLine({
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
