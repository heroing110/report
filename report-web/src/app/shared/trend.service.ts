import {Injectable} from '@angular/core';
import {CategoryAndShopDataItem} from './category.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(private http: HttpClient) {
  }


  // 分页查询 【电商总体交易额走势】 表格数据
  pagingTrendListView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('total/listview', params).toPromise();
  }

  // 分页查询 【电商总体交易额走势】 图表数据
  getTrendLineData(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('total/line', params).toPromise();
  }
}
