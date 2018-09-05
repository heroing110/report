import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../../shared/shop.service';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {ColumnItem, DataTableComponent} from '../../../shared/data-table/data-table.component';
import * as moment from 'moment';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-shop-analysis',
  templateUrl: './shop-analysis.component.html',
  styleUrls: ['./shop-analysis.component.less']
})
export class ShopAnalysisComponent implements OnInit {
  // 销售额TOP30
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额TOP30 表格数据的服务
  volumeParam = {
    pageNo: 1,
    pageSize: 30,
    orderBy: 'salesVolume',
    platform: null,
    sCat1Name: null,
  };

  // 销售量TOP30
  slaesCountConfigs: ColumnItem[];
  getSlaesCountTableDataFn: GetTableDataFn; // 查询 销售量TOP30 表格数据的服务
  countParam = {
    pageNo: 1,
    pageSize: 30,
    orderBy: 'salesCount',
    platform: null,
    sCat1Name: null,
  };

  loading = false;
  loading2 = false;
  dateRange: Date[] = [];
  private dateAreaStr: string;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.salesVolumeConfigs = this.createColumnVolumeConfigs();
    this.slaesCountConfigs = this.createColumnCountConfigs();

    // 销额度排序TOP30
    this.getSalesVolumeTableDataFn = () => {
      this.loading = true;
      return this.shopService.pagingShopView(formatParam(this.volumeParam))
        .then(res => {
          this.loading = false;
          res.data.total = Math.min(res.data.total, this.volumeParam.pageSize);
          return res;
        });
    };

    // 销量排序TOP30
    this.getSlaesCountTableDataFn = () => {
      this.loading2 = true;
      return this.shopService.pagingShopView(formatParam(this.countParam))
        .then(res => {
          this.loading2 = false;
          res.data.total = Math.min(res.data.total, this.countParam.pageSize);
          return res;
        });
    };

    // 删除空的参数(因为后台对参数严格验证)
    const formatParam = (param: CategoryAndShopDataItem) => {
      const newParam = cloneDeep(param);
      if (!newParam.platform) {
        delete newParam.platform;
      }
      if (this.dateRange && this.dateRange.length) {
        const [s, e] = [
          moment(this.dateRange[0]).format('YYYY-MM'),
          moment(this.dateRange[1]).format('YYYY-MM')
        ];
        newParam.dateBegin = `${s}-01`;
        newParam.dateEnd = `${e}-02`;
        this.dateAreaStr = `${s}-${e}`;
      } else {
        delete newParam.dateBegin;
        delete newParam.dateEnd;
      }
      return newParam;
    };
  }

  doQuery(table: DataTableComponent) {
    table.searchData(true);
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
      {column: 'shopName', title: '店铺名称'},
      {column: 'salesVolume', title: '销售额'},
    ];

    return configs;
  }

  private createColumnCountConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: () => {
          return this.dateAreaStr;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'shopName', title: '店铺名称'},
      {column: 'salesCount', title: '销售量'},
    ];

    return configs;
  }
}
