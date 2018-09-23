import { Phone } from './../../../shared/models/phone.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html'
})
export class PhoneItemComponent {
  @Input() phone: Phone = new Phone();
}
