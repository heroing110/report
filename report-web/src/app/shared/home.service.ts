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

  // 分页查询 【首页统计30】 数据
  pagingHomeTop30(params: PagingParam & StaTotal): Promise<AjaxResult<PagingResult<StaTotal[]>>> {
    return this.http.post<any>('cat/home_top30', params).toPromise();
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
}
