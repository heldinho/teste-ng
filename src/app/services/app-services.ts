import { Injectable } from '@angular/core';
import { StorageServices } from './storage-services';
import { IProduct } from 'src/app/@types/product-types';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private _state: any = null;
  private _modal: boolean = false;
  private _cart: IProduct[] = this._storage.getStorage('cart');
  private _offcanvas: boolean = false;

  constructor(public _storage: StorageServices) {}

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
    this._storage.setStorage('cart', this._cart);
  }

  public removeItemCart(id: number) {
    this._cart = this._cart.filter(product => product.id !== id);
    this._storage.setStorage('cart', this._cart);
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
