import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  // 查询 【首页统计数据】 数据
  homeIndex(params: PagingParam & StaTotal): Promise<AjaxResult<StaTotal[]>> {
    return this.http.post<any>('total/home_index', params).toPromise();
  }

  // 查询 【首页全国排序】 数据
  homeCountryRank(params: PagingParam & StaTotal): Promise<AjaxResult<StaTotal[]>> {
    return this.http.post<any>('total/home_country_rank', params).toPromise();
  }

  // 查询 【首页全省排序】 数据
  homeProvinceRank(params: PagingParam & StaTotal): Promise<AjaxResult<StaTotal[]>> {
    return this.http.post<any>('total/home_province_rank', params).toPromise();
  }

  // 查询 【主要电商平台交易额走势】 数据
  homeBusinessLine(params: PagingParam & StaTotal): Promise<AjaxResult<StaTotal[]>> {
    return this.http.post<any>('cat/home_business_line', params).toPromise();
  }

  // 查询 【电子商务市场结构】 数据
  homeBusinessPie(params: PagingParam & StaTotal): Promise<AjaxResult<StaTotal[]>> {
    return this.http.post<any>('total/home_buisness', params).toPromise();
  }

  // 分页查询 【首页统计30】 数据
  pagingHomeTop30(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('cat/home_top30', params).toPromise();
  }

  // 分页查询 【地域分析-各地速览】 数据
  pagingAreaListview(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('total/area_listview', params).toPromise();
  }

  // 分页查询 【地域分析-各地对比】 数据
  areaWholeListview(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('total/area_whole_listview', params).toPromise();
  }

  // 分页查询 【区域分析-企业数、从业人数统计】 表格数据
  pagingAreaQysListview(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('total/area_qys_listview', params).toPromise();
  }

  // 查询 【区域分析-企业数、从业人数统计】 线图数据
  areaQysLine(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('total/area_qys_line', params).toPromise();
  }
}


export class StaTotal {
  id?: number;
  row?: number;
  date?: string;
  dateStr?: string;
  dateBegin?: string;
  dateEnd?: string;
  year?: string;
  month?: string;
  months?: string[];
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  indexType?: string;
  indexType1?: string;
  indexType2?: string;
  indexValue?: number;
  mom?: number;
  yoy?: number;
  unitType?: string;
  rankInCountry?: number;
  rankInProvince?: number;
  rankInCity?: number;
  insertTime?: string;
  updateTime?: string;
  updateUser?: string;
  status?: number;
  ramark1?: string;
  remark2?: string;
  remark3?: string;
  pageNo?: number;
  platform?: string;
  pageSize?: number;
  totalVolume?: number;
  totalCount?: number;
  totalMum?: number;
  totalCountMum?: number;
  qys?: number;
  cysr?: number;
  total?: number;
  type?: number;
}
