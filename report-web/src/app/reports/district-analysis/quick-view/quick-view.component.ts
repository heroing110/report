import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
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
  private dateAreaStr: string;

  loading = false;
  categoryList: OptionItem[];
  category = '电商整体';

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

        yAxis: {name: '亿元', type: 'value'},
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
    return this.trendService.getTrendCoreCityLineData({
      indexType: this.category || void 0,
      ...date
    });
  }

  private createColumnVolumeConfigs() {
    const configs: ColumnItem[] = [
      {column: 'dateStr', title: '时间'},
      {column: 'province', title: '省'},
      {column: 'city', title: '市'},
      {column: 'indexType', title: '指标类型'},
      {column: 'total', title: '指标值'},
      // {column: 'totalMom', title: '环比'},
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
