import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensagem: boolean = false
  titulo: boolean = false
  constructor() { }

  ngOnInit() {
  }

  // a maioria dos métodos que brabalha com eventos vai retornar void

  // !this.mensagem --> inverte o estado da situação. Troca de estado
  exibirMensagem(): void{
    this.mensagem = !this.mensagem //toggle
  }

  redirecionar(): void {

    this.titulo = true
  }

}
