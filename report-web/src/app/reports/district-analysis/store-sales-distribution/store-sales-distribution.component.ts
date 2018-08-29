import {Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import * as moment from 'moment';
import {ShopService} from '../../../shared/shop.service';
import {groupBy, map} from 'lodash';

@Component({
  selector: 'app-store-sales-distribution',
  templateUrl: './store-sales-distribution.component.html',
  styleUrls: ['./store-sales-distribution.component.less']
})
export class StoreSalesDistributionComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  private dateAreaStr: string;

  constructor(private shopService: ShopService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.shopService.pagingAreaShopListview({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async setChartOption() {
    this.loading = true;

    const dataList = (await this.getChartData()).data;

    const groupData = groupBy(dataList, 'range');// 0-100

    const ranges = Object.keys(groupData); // [0-200 , ]

    let citys = null;

    const series = [];

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      const list = groupData[range];
      if (!citys) {
        citys = map(list, 'city');
      }

      series.push({
        name: range,
        type: 'bar',
        stack: '销售额',
        label: {
          normal: {show: false},
          emphasis: {
            show: true,
            position: 'insideRight'
          }
        },
        data: map(list, 'shopCount')
      });
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ranges
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: citys
      },
      yAxis: {type: 'value'},
      series: series
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.shopService.areaShopLine({
      platform: this.platform || void 0,
      ...date
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: () => {
          return this.dateAreaStr;
        }
      },
      {column: 'province', title: '省'},
      {column: 'city', title: '市'},
      {column: 'platform', title: '平台'},
      {column: 'type', title: '销售额区间'},
      {
        column: 'percent', title: '占比',
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
