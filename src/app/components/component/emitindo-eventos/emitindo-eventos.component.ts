import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitindo-eventos',
  templateUrl: './emitindo-eventos.component.html',
  styleUrls: ['./emitindo-eventos.component.css']
})
export class EmitindoEventosComponent implements OnInit {

  meuNumero: number = 0
  constructor() { }

  ngOnInit() {
  }

  onEnviarNumero(){
    this.meuNumero = Math.floor(Math.random() * 10) // sorteia números
  }
}
