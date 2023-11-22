import { Component } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { formatNumber } from 'src/app/helpers';
import { ApiService } from 'src/app/services/api';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
})
export class OffcanvasComponent {
  price: any = formatNumber;
  holder: any = {};

  constructor(public app: AppServices, public api: ApiService) {}

  async getHolder() {
    try {
      const res = await this.api.getPlaceHolder();
      this.holder = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
