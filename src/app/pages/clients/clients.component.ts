import { Component } from '@angular/core';

interface IValue {
  name: string;
  document: string;
  email: string;
  celular: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  tab: number = 1;
  values: IValue = {
    name: '',
    document: '',
    email: '',
    celular: '',
  };

  constructor() {}

  keyup(event: any, val: string) {
    this.values.name = val;
  }
}
