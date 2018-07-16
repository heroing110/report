import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: MenuItem[] = [
    // 本地速览
    {
      name: '本地速览',
      path: '/reports/quick-view',
      icon: 'anticon-dashboard'
    },

    // 品类分析
    {
      name: '品类分析',
      path: '/reports/category-analysis',
      icon: 'anticon-schedule',
      children: [
        {name: '整体分析', path: '/reports/category-analysis/whole'},
        {name: '品类细分', path: '/reports/category-analysis/subdivision'},
        {name: '品类区域分析', path: '/reports/category-analysis/category-area'},
        {name: '各品类下头部店铺', path: '/reports/category-analysis/category-top-shop'},
      ]
    },

    // 区域分析
    {
      name: '区域分析',
      path: '/reports/regional-analysis',
      icon: 'anticon-global',
      children: [
        {name: '品类分析', path: '/reports/regional-analysis/category'},
        {name: '店铺销售额分步', path: '/reports/regional-analysis/store-sales-distribution'},
        {name: '企业数、从业人数统计', path: '/reports/regional-analysis/enterprises-and-employees'},
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
        {name: '人气单品', path: '/reports/single-product-analysis/popularity'},
        {name: '重点品类', path: '/reports/single-product-analysis/emphases'},
      ]
    },

    // 趋势分析
    {
      name: '趋势分析',
      path: '/reports/trend-analysis',
      icon: 'anticon-line-chart',
      children: [
        {name: '电商总体交易走势', path: '/reports/trend-analysis/e-commerce-overall'},
        {name: '网络零售交易走势', path: '/reports/trend-analysis/network-retailing'},
      ]
    },
  ];

  constructor() {
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
