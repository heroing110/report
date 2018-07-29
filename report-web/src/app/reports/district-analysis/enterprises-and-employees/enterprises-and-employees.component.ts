import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem, CategoryService} from '../../../shared/category.service';
import {CommonDataService} from '../../../shared/common-data.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import * as moment from 'moment';

@Component({
  selector: 'app-enterprises-and-employees',
  templateUrl: './enterprises-and-employees.component.html',
  styleUrls: ['./enterprises-and-employees.component.less']
})
export class EnterprisesAndEmployeesComponent implements OnInit, AfterViewInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  categoryList: OptionItem[];

  constructor(private categoryService: CategoryService,
              private commonDataService: CommonDataService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      return this.categoryService.pagingCatView({
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async ngAfterViewInit() {
    this.categoryList = (await this.commonDataService.getCategoryList()).data;
    this.setChartOption();
  }

  async setChartOption() {
    if (!this.categoryList || !this.categoryList.length) {
      return;
    }
    this.loading = true;


    const option = {
      title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最高气温', '最低气温']
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '最高气温',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10]
        },
        {
          name: '最低气温',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0]
        }
      ]
    };

    this.dataChart.setOption(option);
    this.loading = false;
  }

  getChartData(): Promise<AjaxResult<any>> {
    const [s, e] = this.dateRange;
    return this.categoryService.catView({
      platform: this.platform || void 0,
      dateBegin: `${moment(s).format('YYYY-MM')}-01`,
      dateEnd: `${moment(e).format('YYYY-MM')}-02`
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
      {column: 'sCat1Name', title: '一级品类'},
      {column: 'city', title: '城市'},
      {
        column: 'salesPercent', title: '销售额占比',
        formatter: (row, value) => {
          return `${value || 0}%`;
        }
      },
    ];

    return configs;
  }

}
