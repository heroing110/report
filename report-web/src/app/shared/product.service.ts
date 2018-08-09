import {Injectable} from '@angular/core';
import {CategoryAndShopDataItem} from './category.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  // 分页查询 【单品分析】 数据
  pagingProductView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('product/listview', params).toPromise();
  }

  // 查询 【售额占比】 数据
  getProductPie(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('product/pie', params).toPromise();
  }

  // 查询 【重点平泪监测】 数据
  getProductLine(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('product/line', params).toPromise();
  }
}
