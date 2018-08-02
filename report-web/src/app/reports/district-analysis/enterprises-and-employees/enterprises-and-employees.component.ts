import {Component, OnInit, ViewChild} from '@angular/core';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import * as moment from 'moment';
import {HomeService} from '../../../shared/home.service';
import {map} from 'lodash';

@Component({
  selector: 'app-enterprises-and-employees',
  templateUrl: './enterprises-and-employees.component.html',
  styleUrls: ['./enterprises-and-employees.component.less']
})
export class EnterprisesAndEmployeesComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  loading = false;

  constructor(private homeService: HomeService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.homeService.pagingAreaQysListview({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async setChartOption() {
    this.loading = true;

    const dataList = (await this.getChartData()).data;

    const option = {
      tooltip: {trigger: 'axis'},
      legend: {
        data: ['企业数', '从业人数']
      },
      xAxis: {
        type: 'category',
        data: map(dataList, 'city')
      },
      yAxis: {type: 'value'},
      series: [
        {
          name: '企业数',
          type: 'line',
          data: map(dataList, 'qys')
        },
        {
          name: '从业人数',
          type: 'line',
          data: map(dataList, 'cyrs')
        }
      ]
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const date = this.getDateRangeParam();
    return this.homeService.areaQysLine({
      ...date
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'province', title: '省'},
      {column: 'city', title: '市'},
      {column: 'qys', title: '企业数'},
      {column: 'cyrs', title: '从业人数'}
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
