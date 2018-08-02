import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryAndShopDataItem} from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  // 分页查询 【店铺分析】 数据
  pagingShopView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('shop/listview', params).toPromise();
  }

  // 分页查询 【店铺销售额分步】 表格数据
  pagingAreaShopListview(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('shop/area_shop_listview', params).toPromise();
  }

  // 查询 【店铺销售额分步】 图表数据
  areaShopLine(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('shop/area_shop_line', params).toPromise();
  }
}
