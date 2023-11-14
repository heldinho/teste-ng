import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServices } from './app-services';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
