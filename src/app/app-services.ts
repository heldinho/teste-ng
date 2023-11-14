import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private _state: any = null;

  get state(): any {
    return this._state;
  }

  set state(value: any) {
    this._state = value;
  }
}
