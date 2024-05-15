import { PaginationAdapter } from "../adapters/pagination_adapter";
import { Pagination } from "../entities/pagination";

export class PaginationModel implements Pagination {
  count: number;
  pages: number;
  next:  string;
  prev:  string;

  constructor(
    count: number,
    pages: number,
    next:  string,
    prev:  string,
  ) {
    this.count = count;
    this.pages = pages;
    this.next =  next;
    this.prev =  prev;
  }
  
  static fromJson(json: { [key: string]: never }): PaginationModel {
    return new PaginationModel(
      json[PaginationAdapter.count] ?? 1,
      json[PaginationAdapter.pages] ?? 1,
      json[PaginationAdapter.next] ?? '',
      json[PaginationAdapter.prev] ?? '',
    );
  }
}
