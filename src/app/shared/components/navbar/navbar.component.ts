import { Component } from '@angular/core';
import { AppServices } from 'src/app/app-services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public app: AppServices) {}
}
