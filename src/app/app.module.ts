import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServices } from './services/app-services';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductComponent } from './components/product/product.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ImageDefaultComponent } from './components/image-default/image-default.component';
import { ApiService } from './services/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    ProductComponent,
    OffcanvasComponent,
    ProductCartComponent,
    ImageDefaultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppServices, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
