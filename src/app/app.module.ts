import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
