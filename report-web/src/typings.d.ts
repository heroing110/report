// ajax接口返回结构
interface AjaxResult<T> {
  code?: number;
  data?: T;
  msg?: string;
}

// 分页数据结构
interface PagingResult<T> {
  rows?: T;
  pageIndex?: number;
  pageSize?: number;
  total?: number;
}

// 分页查询参数
interface PagingParam {
  pageNo?: number;
  pageSize?: number;
  orderBy?: string;
}

// 获取表格分页数据时，所需要提供的函数
type GetTableDataFn = (pageIndex: number, pageSize: number, sortMap: any, filterMap: any) => Promise<AjaxResult<PagingResult<any[]>>>;

// 通用选项数据结构
interface OptionItem {
  label: string;
  value: string;
}
