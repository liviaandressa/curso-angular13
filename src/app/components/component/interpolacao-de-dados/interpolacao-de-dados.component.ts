import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao-de-dados',
  templateUrl: './interpolacao-de-dados.component.html',
})
export class InterpolacaoDeDadosComponent implements OnInit {

  frase = "Aula de interpolação de dados"
  numero: number = 20

  boleano: boolean = true
  constructor() { }

  ngOnInit() {
  }

}
