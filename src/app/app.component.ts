import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // aula de interpolaçaõ
  dadosUsuario = {
    idade: 20,
    sexo: 'feminino'
  }
  usuario = 'Lívia'
  title = 'Curso de Angular';
}
