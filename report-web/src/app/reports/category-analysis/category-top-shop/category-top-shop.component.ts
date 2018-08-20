import {Component, OnInit} from '@angular/core';
import {ColumnItem, DataTableComponent} from '../../../shared/data-table/data-table.component';
import {CategoryAndShopDataItem} from '../../../shared/category.service';
import {CatShopService} from '../../../shared/cat-shop.service';
import {cloneDeep} from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-category-top-shop',
  templateUrl: './category-top-shop.component.html',
  styleUrls: ['./category-top-shop.component.less']
})
export class CategoryTopShopComponent implements OnInit {

  // 销售额TOP10
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额TOP10 表格数据的服务
  volumeParam = {
    pageNo: 1,
    pageSize: 10,
    platform: null,
    sCat1Name: '',
  };

  // 销售量TOP10
  slaesCountConfigs: ColumnItem[];
  getSlaesCountTableDataFn: GetTableDataFn; // 查询 销售量TOP10 表格数据的服务
  countParam = {
    pageNo: 1,
    pageSize: 10,
    platform: null,
    sCat1Name: '',
  };

  loading = false;
  loading2 = false;
  dateRange: Date[] = [];
  private dateAreaStr: string;

  constructor(private catShopService: CatShopService) {
  }

  ngOnInit() {
    this.salesVolumeConfigs = this.createColumnVolumeConfigs();
    this.slaesCountConfigs = this.createColumnCountConfigs();

    // 月销额度排序TOP10
    this.getSalesVolumeTableDataFn = () => {
      this.loading = true;
      return this.catShopService.pagingCatShopVolumeView(formatParam(this.volumeParam))
        .then(res => {
          this.loading = false;
          res.data.total = Math.min(res.data.total, this.volumeParam.pageSize);
          return res;
        });
    };

    // 月销量排序TOP10
    this.getSlaesCountTableDataFn = () => {
      this.loading2 = true;
      return this.catShopService.pagingCatShopCountView(formatParam(this.countParam))
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
      if (!newParam.sCat1Name) {
        delete newParam.sCat1Name;
      }
      if (this.dateRange && this.dateRange.length) {
        const [s, e] = this.dateRange;
        newParam.dateBegin = `${moment(s).format('YYYY-MM')}-01`;
        newParam.dateEnd = `${moment(e).format('YYYY-MM')}-02`;

        this.dateAreaStr = `${newParam.dateBegin}-${newParam.dateEnd}`;
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
        formatter: () => this.dateAreaStr
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'sCat1Name', title: '一级品类'},
      {column: 'shopName', title: '店铺名称'},
      {column: 'totalVolume', title: '销售额'},
    ];

    return configs;
  }

  private createColumnCountConfigs() {
    const configs: ColumnItem[] = [
      {
        column: 'date', title: '时间',
        formatter: () => this.dateAreaStr
      },
      {column: 'province', title: '省'},
      {column: 'platform', title: '平台'},
      {column: 'sCat1Name', title: '一级品类'},
      {column: 'shopName', title: '店铺名称'},
      {column: 'totalCount', title: '销售量'},
    ];

    return configs;
  }

}
