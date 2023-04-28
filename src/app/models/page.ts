import { Infos } from "./resultPokemons";

export class Page {
    page?: number;
    pages?: number;
    offset: number;
    limit: number;
    next: boolean;
    previous: boolean;

    constructor(item: Infos) {
      this.page = this.getPage(item);
      this.pages = this.getPages(item);
      this.offset = this.getOffset(item);
      this.limit = this.getLimit(item);
      this.next = item.next ? true : false;
      this.previous = item.previous ? true : false;
    }

    private getPage(item: Infos) {
      const limit = this.getLimit(item);
      const offset = this.getOffset(item);
      return Math.round(offset / limit);
    }

    private getPages(item: Infos) {
      const limit = this.getLimit(item);
      return Math.ceil(item.count / limit);
    }

    private getLimit(item: Infos) {
      const urls = item.next.split("?");
      const partes = urls[1].split("&");
      const limit = partes[1].split("=");
      return Number(limit[1]);
    }

    private getOffset(item: Infos) {
      const urls = item.next.split("?");
      const partes = urls[1].split("&");
      const offset = partes[0].split("=");
      return Number(offset[1]);
    }
}
