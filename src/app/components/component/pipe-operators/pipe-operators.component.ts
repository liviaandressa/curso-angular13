import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.css']
})
export class PipeOperatorsComponent implements OnInit {

  mensagem = 'testanto pipe operators por meio de propriedade';

  data = new Date(); // o new mostra a data atual completa
  constructor() { }

  ngOnInit() {
  }

}
