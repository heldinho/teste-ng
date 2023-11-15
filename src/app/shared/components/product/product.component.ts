import { Component, Input } from '@angular/core';
import { AppServices, IProduct } from 'src/app/app-services';
import { formatNumber } from '../../helpers';

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
