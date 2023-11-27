import { Component } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { formatNumber } from 'src/app/helpers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  formatNum: any = formatNumber;
  toggleSettings: boolean = false;

  constructor(public app: AppServices) {}
}
