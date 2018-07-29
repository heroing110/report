import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  // 分页查询 【品类】 数据
  pagingCatView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<PagingResult<CategoryAndShopDataItem[]>>> {
    return this.http.post<any>('cat/listview', params).toPromise();
  }

  // 查询 【各品类区域销售占比分析】 图表数据
  catView(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('cat/list', params).toPromise();
  }

  // 查询 【细分品类探查】 图表数据
  catSubdivisionTree(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('cat/tree', params).toPromise();
  }

  // 查询 【一级品类销售额占比】【一级品类销量占比】 图表数据
  catWholeList(params: PagingParam & CategoryAndShopDataItem): Promise<AjaxResult<CategoryAndShopDataItem[]>> {
    return this.http.post<any>('cat/whole_list', params).toPromise();
  }
}

export class CategoryAndShopDataItem {
  id?: number;
  year?: string;
  month?: string;
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  platform?: string;
  sCat1Name?: string;
  cat1Name?: string;
  cat2Name?: string;
  cat3Name?: string;
  shopId?: string;
  shopName?: string;
  pCount?: number;
  mSlaesCount?: number;
  mSalesVolume?: number;
  mSalesVolumeLevel?: string;
  unitType?: string;
  insertTime?: string;
  updateTime?: string;
  updateUser?: string;
  status?: number;
  remark1?: string;
  remark2?: string;
  remark3?: string;
  salesPercent?: string;
  countPercent?: string;
  date?: string;
  dateStr?: string;
  data?: string;
  type?: string;
  indexType1?: string;
  indexType2?: string;
  dateBegin?: string;
  dateEnd?: string;

  totalCount?: number; // 销量
  totalVolume?: number; // 销售额
}
