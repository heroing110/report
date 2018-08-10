import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryAndShopDataItem} from './category.service';

@Injectable({
  providedIn: 'root'
})
export class LocalProductService {

  constructor(private http: HttpClient) {
  }

  // 分页查询 【特色产品监控】 图表数据
  queryPlatformPie(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('local_product/platform_pie', params).toPromise();
  }

  // 分页查询 【特色产品监控】 图表数据
  queryLine(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('local_product/line', params).toPromise();
  }

  // 分页查询 【特色产品监控】 图表数据
  queryProvincePie(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('local_product/province_pie', params).toPromise();
  }

  // 分页查询 【特色产品监控】 表格数据
  pagingListview(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('local_product/listview', params).toPromise();
  }
}
