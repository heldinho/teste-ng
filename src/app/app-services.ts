import { Injectable } from '@angular/core';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  price_sales: number;
  sales: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private _state: any = null;
  private _modal: boolean = false;
  private _cart: IProduct[] = [];
  private _offcanvas: boolean = false;

  set offcanvas(value: boolean) {
    this._offcanvas = value;
  }

  get offcanvas() {
    return this._offcanvas;
  }

  get cartCount(): number {
    return this._cart.length;
  }

  get cartSubtotal(): number {
    return this._cart.reduce((a, c) => a + c.price, 0);
  }

  public getCart() {
    return this._cart;
  }

  public addItemCart(product: IProduct) {
    this._cart = [...this._cart, product];
  }

  public removeItemCart(id: number) {
    this._cart = this._cart.filter((product) => product.id !== id);
  }

  get state(): any {
    return this._state;
  }

  set state(value: any) {
    this._state = value;
  }

  get modal(): boolean {
    return this._modal;
  }

  set modal(value: boolean) {
    this._modal = value;
  }
}
