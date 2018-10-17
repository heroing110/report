import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() {
  }

  getPlatformList(): Promise<AjaxResult<OptionItem[]>> {
    const platformList: OptionItem[] = [
      {label: '天猫', value: '天猫'},
      {label: '淘宝', value: '淘宝'},
      {label: '京东', value: '京东'},
    ];

    return Promise.resolve({data: platformList});
  }

  getCategoryList(): Promise<AjaxResult<OptionItem[]>> {
    const categoryList: OptionItem[] = [
      {label: '家用电器', value: '家用电器'},
      {label: '个护化妆', value: '个护化妆'},
      {label: '其他', value: '其他'},
      {label: '医药保健', value: '医药保健'},
      {label: '图书音像', value: '图书音像'},
      {label: '家居家装', value: '家居家装'},
      {label: '居家日用', value: '居家日用'},
      {label: '手机数码', value: '手机数码'},
      {label: '服装', value: '服装'},
      {label: '母婴', value: '母婴'},
      {label: '汽车用品', value: '汽车用品'},
      {label: '珠宝礼品', value: '珠宝礼品'},
      {label: '电脑办公', value: '电脑办公'},
      {label: '箱包饰品', value: '箱包饰品'},
      {label: '运动户外', value: '运动户外'},
      {label: '食品酒水', value: '食品酒水'},
    ];

    return Promise.resolve({data: categoryList});
  }

  getIndexTypeList(): Promise<AjaxResult<OptionItem[]>> {
    const categoryList: OptionItem[] = [
      {label: '电商整体', value: '电商整体'},
      {label: '店铺数', value: '店铺数'},
      {label: '从业人数', value: '从业人数'},
      {label: 'B2B', value: 'B2B'},
      {label: '网络零售', value: '网络零售'},
      {label: '跨境电商', value: '跨境电商'},
      {label: '农村电商', value: '农村电商'},
      {label: '跨境电商', value: '跨境电商'},
      {label: '跨境电商', value: '跨境电商'},
    ];
    return Promise.resolve({data: categoryList});
  }
}
