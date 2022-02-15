export interface TotalCountResult {
  pageSize: number,
  previousPageIndex: number,
  currentPageIndex: number,
  nextPageIndex: number,
  totalItemCount: number,
  totalPageCount: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean
}

export interface TotalCountResult2 {
  totalItemCount: number,
  totalPageCount: number,
}