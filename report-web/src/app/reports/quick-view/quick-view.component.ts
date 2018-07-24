import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ColumnItem} from '../../shared/data-table/data-table.component';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent implements OnInit, AfterViewInit {

  columnConfigs: ColumnItem[] = [
    {
      column: 'age', title: '年龄',
      sort: true,
      formatter: (row, data: number) => {
        return data.toFixed(2);
      }
    },
    {column: 'name', title: '姓名', sort: true},
    {
      column: 'sex',
      title: '性别',
      sort: true,
      filter: true,
      filterList: [
        {text: '男', value: '1'},
        {text: '女', value: '0'},
      ]
    },
  ];

  // 查询表格数据的服务
  getTableDataFn: GetTableDataFn;

  constructor() {
  }

  ngOnInit() {
    // 设置查询表格数据的服务
    this.getTableDataFn = (pageIndex: number, pageSize: number, sortMap: any, filterMap: any) => {
      const list = [
        {age: Math.random(), name: '小红', sex: '女'},
        {age: Math.random(), name: '小红2', sex: '女2'},
        {age: Math.random(), name: '小红3', sex: '女1'},
      ];
      return Promise.resolve({data: {rows: list, total: 300}});
    };
  }

  ngAfterViewInit() {

  }

}
