import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compartilhando-dados',
  templateUrl: './compartilhando-dados.component.html',
  styleUrls: ['./compartilhando-dados.component.css']
})
export class CompartilhandoDadosComponent implements OnInit {

  @Input() nome: string;
  @Input() informacoes;
  constructor() { }

  ngOnInit() {
  }

}
