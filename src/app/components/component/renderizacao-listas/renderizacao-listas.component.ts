import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderizacao-listas',
  templateUrl: './renderizacao-listas.component.html',
  styleUrls: ['./renderizacao-listas.component.css']
})
export class RenderizacaoListasComponent implements OnInit {

  animais = [
    { nome: 'gato', tipo: 'legal'},
    { nome: 'cachorro', tipo: 'legal'},
    { nome: 'cabra', tipo: 'não legal'},
    { nome: 'ovelha', tipo: 'legal'},
    { nome: 'peixe', tipo: 'não legal'},
    { nome: 'passarinho', tipo: 'legal'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
