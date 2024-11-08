import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas : Persona[] = [new Persona("Daniel" ,"Cifuentes"), new Persona("Cosme" ,"Fulanito")];
  nombreInput : string = "";
  apellidoInput : string = "";

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }

}
