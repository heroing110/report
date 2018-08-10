import {Injectable} from '@angular/core';
import {cloneDeep} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menus: MenuItem[] = [
    // 本地速览
    {
      name: '本地速览',
      path: '/reports/quick-view',
      icon: 'anticon-dashboard'
    },

    // 趋势分析
    {
      name: '趋势分析',
      path: '/reports/trend-analysis',
      icon: 'anticon-line-chart',
      children: [
        {name: '电商总体交易走势', path: '/reports/trend-analysis/e-commerce-overall'},
        {name: 'B2B交易走势', path: '/reports/trend-analysis/B2B'},
        {name: '网络零售交易走势', path: '/reports/trend-analysis/network-retailing'},
        {name: '跨境电商交易走势', path: '/reports/trend-analysis/cross-border'},
        {name: '农村电商交易走势', path: '/reports/trend-analysis/countryside'},
        {name: '实物商品网购交易走势', path: '/reports/trend-analysis/kind-online-shopping'},
        {name: '虚拟商品网购交易走势', path: '/reports/trend-analysis/virtual-online-shopping'},
        {name: '跨境电商出口走势', path: '/reports/trend-analysis/cross-border-export'},
        {name: '跨境电商进口走势', path: '/reports/trend-analysis/cross-border-import'},
        {name: '电商企业数/就业人数变化趋势', path: '/reports/trend-analysis/enterprises-and-employment'},
      ]
    },

    // 区域分析
    {
      name: '区域分析',
      path: '/reports/district-analysis',
      icon: 'anticon-global',
      children: [
        {name: '区域趋势速览', path: '/reports/district-analysis/quick-view'},
        {name: '区域整体对比', path: '/reports/district-analysis/contrast'},
        {name: '区域品类分析', path: '/reports/district-analysis/category'},
        {name: '区域店铺交易额分布', path: '/reports/district-analysis/store-sales-distribution'},
        // {name: '区域电商企业数、从业人数统计', path: '/reports/district-analysis/enterprises-and-employees'},
      ]
    },

    // 品类分析
    {
      name: '品类分析',
      path: '/reports/category-analysis',
      icon: 'anticon-schedule',
      children: [
        {name: '一级品类整体占比', path: '/reports/category-analysis/whole'},
        {name: '细分品类探查', path: '/reports/category-analysis/subdivision'},
        {name: '品类分区域销售分析', path: '/reports/category-analysis/category-area'},
        {name: '品类分店铺销售分析', path: '/reports/category-analysis/category-top-shop'},
      ]
    },

    // 店铺分析
    {
      name: '店铺分析',
      path: '/reports/shop-analysis',
      icon: 'anticon-shop'
    },

    // 单品分析
    {
      name: '单品分析',
      path: '/reports/single-product-analysis',
      icon: 'anticon-rocket',
      children: [
        {name: '品类分店铺销售分析', path: '/reports/single-product-analysis/popularity'},
        {name: '特色产品监测', path: '/reports/single-product-analysis/emphases'},
      ]
    },
  ];

  constructor() {
  }

  getMenus() {
    return cloneDeep(this.menus);
  }
}

export class MenuItem {
  name: string;
  path: string;
  icon?: string;
  open?: boolean;
  selected?: boolean;
  children?: MenuItem[];
}
