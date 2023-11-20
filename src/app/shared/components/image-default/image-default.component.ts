import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-default',
  templateUrl: './image-default.component.html',
  styleUrls: ['./image-default.component.scss'],
})
export class ImageDefaultComponent {
  @Input('width') width: any = 100;
  @Input('height') height: any = 100;

  constructor() {}
}
