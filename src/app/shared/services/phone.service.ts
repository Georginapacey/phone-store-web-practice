import { Phone } from './../models/phone.model';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private static readonly PHONE_API = `http://localhost:3000/phones`;

  constructor(private http: HttpClient) { }

  list(): Observable<Array<Phone>> {
    return this.http.get<Array<Phone>>(PhoneService.PHONE_API);
  }
}
