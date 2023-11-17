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

  get cartCount(): any {
    const cart = this._cart;
    if (cart) {
      const len = cart.length;
      if (len) return cart.length;
      else return 0;
    }
  }

  get cartSubtotal(): number {
    const cart = this._cart;
    if (cart) {
      return cart.reduce((a, c) => a + c.price, 0);
    }
    return 0;
  }

  public getCart() {
    const cart = this._cart;
    if (cart) {
      return cart;
    }
    return [];
  }

  public addItemCart(product: IProduct) {
    const cart = this._cart;
    if (cart) {
      this._cart = [...this._cart, product];
      this._storage.setStorage('cart', cart);
    } else {
      this._cart = [product];
      this._storage.setStorage('cart', this._cart);
    }
  }

  public removeItemCart(id: number) {
    const cart = this._cart;
    if (cart) {
      cart.filter(product => product.id !== id);
      this._storage.setStorage('cart', cart);
    }
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
