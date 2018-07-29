import {Component, Input, OnInit} from '@angular/core';
import {isFunction} from 'lodash';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less']
})
export class DataTableComponent implements OnInit {
  @Input()
  hideOnSinglePage: boolean; // 当只有一页数据的时候，是否隐藏分页器
  @Input()
  columns: ColumnItem[] = []; // 数据列表配置
  @Input()
  showQuickJumper = true;
  @Input()
  showSizeChanger = true;

  @Input()
  queryDataService: (pageIndex: number, pageSize: number, sortMap: any, filterMap: any) =>
    Promise<AjaxResult<PagingResult<any[]>>>; // 查询数据服务

  loading = false; // 是否遮罩层
  dataSource = []; // 数据列表

  @Input()
  pageSize = 10; // 每页展示数量
  pageIndex = 1; // 当前页数
  total = 0; // 总条数

  // 排序支持
  sortMap = {};

  // 过滤条件
  filterMap = {};

  constructor() {
  }

  ngOnInit() {
    this.searchData();
  }

  // 排序支持
  sort(sortable, col: ColumnItem) {
    if (!sortable) {
      delete this.sortMap[col.column];
    }
    this.searchData(true);
  }

  // 过滤支持
  updateFilter(filterList, col: ColumnItem) {
    if (filterList.length) {
      this.filterMap[col.column] = filterList;
    } else {
      delete this.filterMap[col.column];
    }
    this.searchData(true);
  }

  // 查询数据
  searchData(reload = false) {
    if (reload) {
      this.pageIndex = 1;
    }
    if (this.queryDataService) {
      this.loading = true;
      this.queryDataService(this.pageIndex, this.pageSize, this.sortMap, this.filterMap).then(result => {
        this.loading = false;
        this.dataSource = result.data.rows;
        this.total = result.data.total;
      });
    }
  }

  // 获取数据
  getColumnData(row: any, col: ColumnItem, index: number) {
    if (isFunction(col.formatter)) {
      // 此处加入缓存用来优化动态计算性能
      const key = col.column + '@@' + index;
      if (row[key] !== void 0) {
        return row[key];
      }
      return row[key] = col.formatter(row, row[col.column], index);
    }
    return row[col.column];
  }
}

export class ColumnItem {
  title?: string;
  column?: string;
  formatter?: (row, value, index) => string; // 格式化要显示的数据
  sort?: boolean; // 排序支持
  filter?: boolean; // 过滤支持，需要提供filterList 来过滤
  filterList?: { text: string, value: string }[];
}
