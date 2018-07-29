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
}
