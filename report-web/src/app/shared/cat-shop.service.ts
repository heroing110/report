import {Injectable} from '@angular/core';
import {CategoryAndShopDataItem} from './category.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatShopService {

  constructor(private http: HttpClient) {
  }

  // 分页查询 【品类店铺】 数据
  pagingCatShopVolumeView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('catShop/top_volume_listview', params).toPromise();
  }

  // 分页查询 【品类店铺】 数据
  pagingCatShopCountView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('catShop/top_count_listview', params).toPromise();
  }
}
