import { Component } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { formatNumber } from '../../helpers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  formatNum: any = formatNumber;
  constructor(public app: AppServices) {}
}
