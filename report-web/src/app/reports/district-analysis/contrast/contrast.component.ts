import {Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem, DataTableComponent} from '../../../shared/data-table/data-table.component';
import {HomeService} from '../../../shared/home.service';
import * as moment from 'moment';
import {map} from 'lodash';
import {TrendService} from '../../../shared/trend.service';
import {CommonDataService} from '../../../shared/common-data.service';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.less']
})
export class ContrastComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  @ViewChild('dataTable')
  dataTable: DataTableComponent;

  dateRange: Date[] = [];

  category = '电商整体';
  loading = false;
  categoryList: OptionItem[];
  private dateAreaStr: string;

  constructor(private homeService: HomeService,
              private trendService: TrendService,
              private commonDataService: CommonDataService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.homeService.pagingAreaListview({
        ...date,
        orderBy: 'INDEX_VALUE',
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
    this.commonDataService.getIndexTypeList().then(res => {
      this.categoryList = res.data;
    });
  }

  async setChartOption() {
    const data = (await this.getChartData()).data;

    const citys = map(data, 'city');
    const totals = map(data, 'totalVolume');

    const option = {
      xAxis: {
        type: 'category',
        data: citys
      },
      tooltip: {trigger: 'axis'},
      yAxis: [{type: 'value'}],
      dataZoom: [{
        startValue: citys[0]
      }, {
        type: 'inside'
      }],
      series: [{
        name: '销售额',
        data: totals,
        type: 'bar'
      }]
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.trendService.getTrendCityLineData({
      ...date,
      indexType: this.category || void 0
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
      {column: 'indexType', title: '指标类型'},
      {column: 'total', title: '指标值'},
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
