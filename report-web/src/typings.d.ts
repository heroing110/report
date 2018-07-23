interface AjaxResult<T> {
  code?: number;
  data?: T;
  msg?: string;
}

interface PagingResult<T> {
  rows?: T;
  pageIndex?: number;
  pageSize?: number;
  total?: number;
}

type GetTableDataFn = (pageIndex: number, pageSize: number, sortMap: any, filterMap: any) => Promise<AjaxResult<PagingResult<any[]>>>;
