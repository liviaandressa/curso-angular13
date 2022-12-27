import { Injectable } from '@angular/core';
import { Animal } from 'app/interfaces/animais';

@Injectable()
export class ListaService {
  constructor() { }


  // Tá sendo passado todos os animais em uma lista, depois ta sendo passado o animal que quero remover quando fizer a requisição

  remover(listaAnimais: Animal[], animal: Animal){
    console.log('teste')

    return listaAnimais.filter((res) => animal.nome !== res.nome)
  }
}
