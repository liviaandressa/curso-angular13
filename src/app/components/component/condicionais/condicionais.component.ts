import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionais',
  templateUrl: './condicionais.component.html',
  styleUrls: ['./condicionais.component.css']
})
export class CondicionaisComponent implements OnInit {

  mostrar = 2
  nome: string = 'livia'


  constructor() { }

  ngOnInit() {
  }

}
