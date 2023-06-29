import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxShiftJisModule } from 'ngx-shift-jis';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxShiftJisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
