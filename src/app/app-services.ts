import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private _state: any = null;
  private _modal: boolean = false;

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
