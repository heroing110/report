import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {CategoryService} from '../../../shared/category.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import {CommonDataService} from '../../../shared/common-data.service';
import * as moment from 'moment';
import {groupBy, map} from 'lodash';

@Component({
  selector: 'app-category-area',
  templateUrl: './category-area.component.html',
  styleUrls: ['./category-area.component.less']
})
export class CategoryAreaComponent implements OnInit, AfterViewInit {
  // 销售额
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;
  categoryList: OptionItem[];
  private dateAreaStr: string;

  constructor(private categoryService: CategoryService,
              private commonDataService: CommonDataService) {
  }

  async ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.categoryService.pagingCatAreaView({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async ngAfterViewInit() {
    this.categoryList = (await this.commonDataService.getCategoryList()).data;
  }

  async setChartOption() {
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
        tooltip: {trigger: 'axis'},
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
    const date = this.getDateRangeParam();
    return this.categoryService.catView({
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
      {column: 'platform', title: '平台'},
      {column: 'sCat1Name', title: '一级品类'},
      {column: 'city', title: '城市'},
      {
        column: 'salesPercent', title: '销售额占比',
        formatter: (row, value) => {
          return `${value || 0}%`;
        }
      },
      {
        column: 'countPercent', title: '销售量占比',
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
