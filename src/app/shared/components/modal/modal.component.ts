import { Component } from '@angular/core';
import { AppServices } from 'src/app/app-services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(public app: AppServices) {}

  fnNo(): void {
    this.app.modal = false;
  }

  fnYes(): void {
    alert('Yes, enable');
    this.app.modal = false;
  }
}
