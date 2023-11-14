import { Component } from '@angular/core';
import { AppServices } from 'src/app/app-services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(public app: AppServices) {}
}
