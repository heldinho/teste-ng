import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageServices {
  public getStorage(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  public setStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
