import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolacaoDeDadosComponent } from './components/component/interpolacao-de-dados/interpolacao-de-dados.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoDeDadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
