import { injectable } from "inversify";

export interface IOrderCache {
  set(data: any): void;
  get(): any;
}

@injectable()
export class OrderCache implements IOrderCache {
  private data: any | null;

  constructor() {
    console.log("OrderCache");
  }

  set(data: any): void {
    this.data = data;
  }
  get() {
    return this.data;
  }
}
