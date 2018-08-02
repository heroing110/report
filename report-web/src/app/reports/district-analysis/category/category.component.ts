import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../../shared/category.service';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import * as moment from 'moment';
import {groupBy, map} from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 区域速览 表格数据的服务

  @ViewChild('dataChart')
  dataChart: DataChartComponent;

  dateRange: Date[] = [];

  platform = '';
  loading = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.salesVolumeConfigs = this.createColumnVolumeConfigs();

    this.getSalesVolumeTableDataFn = (pageIndex, pageSize) => {
      const date = this.getDateRangeParam();
      return this.categoryService.areaCatListview({
        ...date,
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async setChartOption() {
    this.loading = true;

    // 所有的数据
    const dataList = (await this.getChartData()).data;


    // 按照一级品类分组
    const groupData = groupBy(dataList, 'city');
    const citys = Object.keys(groupData);

    const options = [];
    const seriesTypes = [
      {name: '零销量', key: 'countPercent', yAxisIndex: 0, type: 'bar'},
      {name: '零售额', key: 'salesPercent', yAxisIndex: 1, type: 'bar'},
    ];

    for (let i = 0; i < citys.length; i++) {
      const list = groupData[citys[i]] || [];

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
            data: map(list, 'sCat1Name'),
            splitLine: {show: false}
          }
        ],
        series: series
      });
    }

    if (!options.length) {
      options.push({
        xAxis: [
          {
            type: 'category',
            data: [],
            splitLine: {show: false}
          }
        ],
        series: []
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
    const date = this.getDateRangeParam();
    return this.categoryService.areaCatBar({
      platform: this.platform || void 0,
      ...date
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'province', title: '省'},
      {column: 'city', title: '市'},
      {column: 'sCat1Name', title: '一级品类'},
      {
        column: 'countPercent', title: '销售量占比',
        formatter: (row, value) => {
          return `${value || 0}%`;
        }
      },
      {
        column: 'salesPercent', title: '销售额占比',
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
      const [s, e] = this.dateRange;
      param.dateBegin = `${moment(s).format('YYYY-MM')}-01`;
      param.dateEnd = `${moment(e).format('YYYY-MM')}-02`;
    }
    return param;
  }

}
