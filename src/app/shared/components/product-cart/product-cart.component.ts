import { Component, Input } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { IProduct } from 'src/app/@types/product-types';
import { formatNumber } from '../../helpers';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input('product') product!: IProduct;

  price: any = formatNumber;

  constructor(public app: AppServices) {}
}
