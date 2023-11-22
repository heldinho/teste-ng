import { Component, Input } from '@angular/core';
import { AppServices } from 'src/app/services/app-services';
import { IProduct } from 'src/app/@types/product-types';
import { formatNumber } from 'src/app/helpers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input('product') product!: IProduct;

  price: any = formatNumber;

  constructor(public app: AppServices) {}

  fnAdd(product: IProduct): void {
    this.app.addItemCart(product);
  }
}
