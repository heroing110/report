import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CategoryAndShopDataItem, CategoryService} from '../../../shared/category.service';
import * as moment from 'moment';
import {groupBy, map} from 'lodash';

@Component({
  selector: 'app-region-quick-view',
  templateUrl: './region-quick-view.component.html',
  styleUrls: ['./region-quick-view.component.less']
})
export class RegionQuickViewComponent implements OnInit, AfterViewInit {
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
    this.loading = true;

    // 所有的数据
    const dataList = (await this.getChartData()).data;


    // 按照一级品类分组
    const groupData = groupBy(dataList, 'sCat1Name');

    const options = [];
    const seriesTypes = [
      {name: '零销量', key: 'countPercent', yAxisIndex: 0, type: 'bar'},
      {name: '零售额', key: 'salesPercent', yAxisIndex: 1, type: 'bar'},
    ];

    for (let i = 0; i < this.categoryList.length; i++) {
      const category = this.categoryList[i];
      const list = groupData[category.value] || [];

      const series = [];

      for (let j = 0; j < seriesTypes.length; j++) {
        const item = seriesTypes[j];
        series.push({
          name: item.name,
          yAxisIndex: item.yAxisIndex,
          type: item.type,
          data: map(list, item.key)
        });
      }

      // 生产所有的配置
      options.push({
        xAxis: [
          {
            type: 'category',
            data: map(list, 'city'),
            splitLine: {show: false}
          }
        ],
        series: series
      });
    }

    const option = {
      baseOption: {
        timeline: {
          controlStyle: {
            showPlayBtn: false,
            show: true
          },
          data: map(this.categoryList, 'value'),
          axisType: 'category'
        },
        legend: {
          data: map(seriesTypes, 'name')
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{a}:{c}% <br/> {a1}:{c1}%'
        },
        calculable: true,
        grid: {
          top: 80,
          bottom: 100
        },
        yAxis: [
          {type: 'value', name: '零售量%'},
          {type: 'value', name: '零售额%'}
        ]
      },
      options: options
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
