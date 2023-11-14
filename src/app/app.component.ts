import { Component, OnInit } from '@angular/core';
import { AppServices } from './app-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'teste-ng';

  constructor(public app: AppServices) {}

  ngOnInit(): void {}

  toggle(): void {
    this.app.state = !this.app.state;
  }
}
