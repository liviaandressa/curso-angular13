import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolacaoDeDadosComponent } from './components/component/interpolacao-de-dados/interpolacao-de-dados.component';
import { CompartilhandoDadosComponent } from './components/component/compartilhando-dados/compartilhando-dados.component';
import { DiretivasComponent } from './components/component/diretivas/diretivas.component';
import { CondicionaisComponent } from './components/component/condicionais/condicionais.component';
import { EventosComponent } from './components/component/eventos/eventos.component';
import { EmitindoEventosComponent } from './components/component/emitindo-eventos/emitindo-eventos.component';
import { EmitindoEventosFilhoComponent } from './components/component/emitindo-eventos-filho/emitindo-eventos-filho.component';
import { RenderizacaoListasComponent } from './components/component/renderizacao-listas/renderizacao-listas.component';
import { PipeOperatorsComponent } from './components/component/pipe-operators/pipe-operators.component';
import { TwoWayBindingComponent } from './components/component/two-way-binding/two-way-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacaoDeDadosComponent,
    CompartilhandoDadosComponent,
    DiretivasComponent,
    CondicionaisComponent,
    EventosComponent,
    EmitindoEventosComponent,
    EmitindoEventosFilhoComponent,
    RenderizacaoListasComponent,
    PipeOperatorsComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
