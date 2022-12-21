import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolacaoDeDadosComponent } from './components/component/interpolacao-de-dados/interpolacao-de-dados.component';
import { CompartilhandoDadosComponent } from './components/component/compartilhando-dados/compartilhando-dados.component';
import { DiretivasComponent } from './components/component/diretivas/diretivas.component';



@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoDeDadosComponent,
    CompartilhandoDadosComponent,
    DiretivasComponent
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
