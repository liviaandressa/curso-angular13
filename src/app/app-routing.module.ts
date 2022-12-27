import { NgModule
 } from "@angular/core";
 import { RouterModule, Routes } from "@angular/router";
import { CompartilhandoDadosComponent } from "./components/component/compartilhando-dados/compartilhando-dados.component";
import { CondicionaisComponent } from "./components/component/condicionais/condicionais.component";
import { DiretivasComponent } from "./components/component/diretivas/diretivas.component";
import { EmitindoEventosComponent } from "./components/component/emitindo-eventos/emitindo-eventos.component";
import { EventosComponent } from "./components/component/eventos/eventos.component";
import { InterpolacaoDeDadosComponent } from "./components/component/interpolacao-de-dados/interpolacao-de-dados.component";
import { PipeOperatorsComponent } from "./components/component/pipe-operators/pipe-operators.component";
import { RenderizacaoListasComponent } from "./components/component/renderizacao-listas/renderizacao-listas.component";
import { TwoWayBindingComponent } from "./components/component/two-way-binding/two-way-binding.component";

 const routes: Routes = [
  {path: '', component: RenderizacaoListasComponent},
  {path: 'compartilhando', component: CompartilhandoDadosComponent},
  {path: 'condicionais', component: CondicionaisComponent},
  {path: 'diretivas', component: DiretivasComponent},
  {path: 'emitindo-eventos', component: EmitindoEventosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'interpolacao', component: InterpolacaoDeDadosComponent},
  {path: 'pipe', component: PipeOperatorsComponent},
  {path: 'binding', component: TwoWayBindingComponent},

 ]

 @NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })

 export class AppRoutingModule {}
