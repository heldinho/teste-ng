import { Component, OnInit } from '@angular/core';
import { AppServices } from './services/app-services';
import { IProduct } from 'src/app/@types/product-types';
import { products } from './shared/mocks/products-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'teste-ng';
  products: IProduct[] = products;

  constructor(public app: AppServices) {}

  ngOnInit(): void {}

  toggle(): void {
    this.app.state = !this.app.state;
  }
}
