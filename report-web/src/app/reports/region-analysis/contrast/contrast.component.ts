import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryAndShopDataItem, CategoryService} from '../../../shared/category.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import * as moment from 'moment';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.less']
})
export class ContrastComponent implements OnInit, AfterViewInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  categoryList: OptionItem[];

  constructor(private categoryService: CategoryService) {
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
    this.categoryList = [
      {label: 'B2B', value: 'B2B'},
      {label: '网络零售', value: '网络零售'},
    ];
    this.setChartOption();
  }

  async setChartOption() {
    if (!this.categoryList || !this.categoryList.length) {
      return;
    }

    const option = {
      xAxis: {
        type: 'category',
        data: [
          '沈阳市',
          '大连市',
          '葫芦岛市',
          '鞍山市',
          '锦州市',
          '营口市',
          '铁岭市',
          '抚顺市',
          '本溪市'
        ]
      },
      tooltip: {trigger: 'axis'},
      yAxis: [{type: 'value'}],
      series: [{
        name: '销售额',
        data: [1, 2, 3, 4, 5, 1, 2, 3, 4],
        type: 'bar'
      }]
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
