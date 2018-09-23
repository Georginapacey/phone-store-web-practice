import { Phone } from './../../../shared/models/phone.model';
import { PhoneService } from './../../../shared/services/phone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
})
export class PhoneListComponent implements OnInit {
  phones: Array<Phone> = [];
  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phoneService.list()
      .subscribe(phones => this.phones = phones);
  }

}
