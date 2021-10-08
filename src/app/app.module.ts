import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkoComponent } from './marko/marko.component';
import { BojanComponent } from './bojan/bojan.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkoComponent,
    BojanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
