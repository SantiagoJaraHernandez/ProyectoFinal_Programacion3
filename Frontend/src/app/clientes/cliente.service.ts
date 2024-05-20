import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }
  //Observable
  /*getClientes():Observable<Cliente[]>{
    return of(CLIENTES);
    
  }*/

  getClientes():Observable<Cliente[]>{
  return this.http.get(this.urlEndpoint).pipe(
    map((response)=>response as Cliente[])
  );
}

  //Tradicional
  /*getClientes():Cliente[]{
    return CLIENTES;
  }*/
}
