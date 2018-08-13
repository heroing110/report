import {Component, OnInit} from '@angular/core';
import {ColumnItem, DataTableComponent} from '../../../shared/data-table/data-table.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {cloneDeep} from 'lodash';
import * as moment from 'moment';
import {ProductService} from '../../../shared/product.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.less']
})
export class PopularityComponent implements OnInit {
// 销售额TOP50
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额TOP50 表格数据的服务
  volumeParam = {
    pageNo: 1,
    pageSize: 50,
    orderBy: 'SALES_VOLUME',
    platform: null,
    sCat1Name: null,
  };

  // 销售量TOP50
  slaesCountConfigs: ColumnItem[];
  getSlaesCountTableDataFn: GetTableDataFn; // 查询 销售量TOP50 表格数据的服务
  countParam = {
    pageNo: 1,
    pageSize: 50,
    orderBy: 'SALES_COUNT',
    platform: null,
    sCat1Name: null,
  };

  loading = false;
  loading2 = false;
  dateRange: Date[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.salesVolumeConfigs = this.createColumnVolumeConfigs();
    this.slaesCountConfigs = this.createColumnCountConfigs();

    // 销额度排序TOP50
    this.getSalesVolumeTableDataFn = () => {
      this.loading = true;
      return this.productService.pagingProductView(formatParam(this.volumeParam))
        .then(res => {
          this.loading = false;
          res.data.total = Math.min(res.data.total, this.volumeParam.pageSize);
          return res;
        });
    };

    // 销量排序TOP50
    this.getSlaesCountTableDataFn = () => {
      this.loading2 = true;
      return this.productService.pagingProductView(formatParam(this.countParam))
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
        const [s, e] = this.dateRange;
        newParam.dateBegin = `${moment(s).format('YYYY-MM')}-01`;
        newParam.dateEnd = `${moment(e).format('YYYY-MM')}-02`;
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
        formatter: (row: CategoryAndShopDataItem) => {
          return `${row.year || ''}-${row.month || ''}`;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'productName', title: '商品名称'},
      {column: 'salesPercent', title: '销售额'},
    ];

    return configs;
  }

  private createColumnCountConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: (row: CategoryAndShopDataItem) => {
          return `${row.year || ''}-${row.month || ''}`;
        }
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'productName', title: '畅销单品'},
      {column: 'countCount', title: '销售量'},
    ];

    return configs;
  }

}
