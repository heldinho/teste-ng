import { Component } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { formatNumber } from '../../helpers';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss'],
})
export class OffcanvasComponent {
  price: any = formatNumber;

  constructor(public app: AppServices) {}
}
