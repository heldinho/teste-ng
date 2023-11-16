import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServices } from './services/app-services';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ProductComponent } from './shared/components/product/product.component';
import { OffcanvasComponent } from './shared/components/offcanvas/offcanvas.component';
import { ProductCartComponent } from './shared/components/product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    ProductComponent,
    OffcanvasComponent,
    ProductCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
