import { Component, OnInit, Output, EventEmitter} from '@angular/core';

// quando é um evento tem que importar o output junto com o eventemitter, se for apenas um dado, somente o                           output basta
@Component({
  selector: 'app-emitindo-eventos-filho',
  templateUrl: './emitindo-eventos-filho.component.html',
  styleUrls: ['./emitindo-eventos-filho.component.css']
})
export class EmitindoEventosFilhoComponent implements OnInit {

  @Output() enviarNumero: EventEmitter<any> = new EventEmitter()
  // EVENTEMITTER ACEITA UM TIPO
  constructor() { }

  ngOnInit() {
  }

  numero() {
    this.enviarNumero.emit();
    }
}
