import {Component, OnInit, ViewChild} from '@angular/core';
import {ColumnItem} from '../../../shared/data-table/data-table.component';
import {CategoryAndShopDataItem, CategoryService} from '../../../shared/category.service';
import {DataChartComponent} from '../../../shared/data-chart/data-chart.component';
import * as moment from 'moment';
import {chain} from 'lodash';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.less']
})
export class SubdivisionComponent implements OnInit {
  // 销售额
  salesVolumeConfigs: ColumnItem[];
  getSalesVolumeTableDataFn: GetTableDataFn; // 查询 销售额 表格数据的服务

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
      return this.categoryService.pagingCatView({
        pageNo: pageIndex,
        pageSize: pageSize
      });
    };
  }

  async setChartOption() {
    if (!this.dataChart) {
      return;
    }
    this.loading = true;
    const dataList = (await this.getChartData(this.platform)).data;

    const treeList = [];
    const sCat1List: CategoryAndShopDataItem[] = chain(dataList).uniqBy('sCat1Name').value();

    for (let i = 0; i < sCat1List.length; i++) {
      const sCat1: CategoryAndShopDataItem = sCat1List[i];
      const sCat1Tree = dumpData(sCat1, treeList, 'sCat1Name');

      const cat1List: CategoryAndShopDataItem[] = chain(dataList).filter({sCat1Name: sCat1.sCat1Name}).uniqBy('cat1Name').value();
      for (let j = 0; j < cat1List.length; j++) {
        const cat1 = cat1List[j];
        const cat1Tree = dumpData(cat1, sCat1Tree, 'cat2Name');

        const cat2List: CategoryAndShopDataItem[] = chain(dataList).filter({cat1Name: cat1.cat1Name}).uniqBy('cat2Name').value();
        for (let k = 0; k < cat2List.length; k++) {
          const cat2: CategoryAndShopDataItem = cat2List[k];
          const cat2Tree = dumpData(cat2, cat1Tree, 'cat2Name');

          const cat3List: CategoryAndShopDataItem[] = chain(dataList).filter({cat2Name: cat2.cat2Name}).value();
          for (let l = 0; l < cat3List.length; l++) {
            const cat3 = cat3List[l];
            dumpData(cat3List[l], cat2Tree, 'cat3Name');
          }
        }
      }
    }

    countSlaesAsTreeList(treeList);

    let dataId = 1;

    function dumpData(cat: CategoryAndShopDataItem, parent, nameKey) {
      const tree = {
        name: cat[nameKey],
        id: dataId++,
        value: cat.mSlaesCount,
        children: []
      };
      if (parent.children) {
        parent.children.push(tree);
      } else if (Array.isArray(parent)) {
        parent.push(tree);
      }
      return tree;
    }

    function countSlaesAsTreeList(list) {
      let count = 0;
      for (let i = 0; i < list.length; i++) {
        const tree = list[i];
        if (tree.children && tree.children.length) {
          tree.value = countSlaesAsTreeList(tree.children);
        } else {
          tree.children = null;
        }
        count += tree.value;
      }
      return count;
    }

    const option = {
      series: [
        {
          type: 'treemap',
          data: treeList,
          leafDepth: 1,
          levels: [
            {
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  gapWidth: 4
                }
              }
            },
            {
              colorSaturation: [0.3, 0.6],
              itemStyle: {
                normal: {
                  borderColorSaturation: 0.7,
                  gapWidth: 2,
                  borderWidth: 2
                }
              }
            },
            {
              colorSaturation: [0.3, 0.5],
              itemStyle: {
                normal: {
                  borderColorSaturation: 0.6,
                  gapWidth: 1
                }
              }
            },
            {
              colorSaturation: [0.3, 0.5]
            }
          ]
        }
      ]
    };

    this.dataChart.setOption(option);

    this.loading = false;
  }

  getChartData(platform): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    const [s, e] = this.dateRange;
    return this.categoryService.catSubdivisionTree({
      platform: platform || void 0,
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
      {column: 'cat1Name', title: '二级品类'},
      {column: 'cat2Name', title: '三级品类'},
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
