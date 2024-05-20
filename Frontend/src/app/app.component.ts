import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Productos';

  nombre: string = 'Santiago Jara Hernandez';

  asignatura: string = 'Programación Tres';
}
