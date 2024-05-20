import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  
})
export class DirectivasComponent {

  listaCursos: string[] = ['PHP','GO','RUBY','JAVA','C++','PYTHON','C#'];

  habilitar: boolean = true;

  //método para habilitar contenido o no.
  setHabilitar():void{
    this.habilitar = (this.habilitar == true) ? false: true;
  }
}
