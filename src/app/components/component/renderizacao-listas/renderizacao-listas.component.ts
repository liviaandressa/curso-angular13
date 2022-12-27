import { Component, OnInit } from '@angular/core';
import { Animal } from 'app/interfaces/animais';
import { ListaService } from './services/lista.service';
@Component({
  selector: 'app-renderizacao-listas',
  templateUrl: './renderizacao-listas.component.html',
  styleUrls: ['./renderizacao-listas.component.css']
})
export class RenderizacaoListasComponent implements OnInit {

  listaAnimais: Animal[] = [
    { nome: 'gato', tipo: 'legal', id: 1},
    { nome: 'cachorro', tipo: 'legal', id:2},
    { nome: 'cabra', tipo: 'não legal', id: 3},
    { nome: 'ovelha', tipo: 'legal', id: 4},
    { nome: 'peixe', tipo: 'não legal', id: 5},
    { nome: 'passarinho', tipo: 'legal', id: 6},
  ]

  detalhesAnimal = ''


  constructor(private servicos: ListaService){}
  ngOnInit() {
  }

  mostrarIdade(animal: Animal){
    this.detalhesAnimal = `o ${animal.nome} tem ${animal.id} anos`
  }

  removerAnimal(animal: Animal){
    //console.log('testando service');
    this.listaAnimais = this.servicos.remover(this.listaAnimais, animal)
  }
}
