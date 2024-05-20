import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent implements OnInit {
 

  //JSON = Javascript Object Notation - APIS
  clientes : Cliente[];

  //método asociado al atributo cliente servicio del service
  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    //Observable
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
    //Tradicional
    //this.clientes = this.clienteService.getClientes();
  }

}
