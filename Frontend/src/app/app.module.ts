import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { FormComponent } from './clientes/form.component';
import { ProductoFormComponent } from '../producto/producto-form/producto-form.component';
import { ProductoListComponent } from '../producto/producto-list/producto-list.component';
import { ProductoEditarComponent } from '../producto/producto-editar/producto-editar.component'; // Importa ProductoEditarComponent

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent },
  { path: 'producto-form', component: ProductoFormComponent },
  { path: 'producto-form/:id', component: ProductoFormComponent },
  { path: 'producto-list', component: ProductoListComponent },
  { path: 'producto-list/:id', component: ProductoListComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/:id/editar', component: ProductoEditarComponent }, // Ruta para la edición del producto
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivasComponent,
    ClientesComponent,
    FormComponent,
    ProductoFormComponent,
    ProductoListComponent,
    ProductoEditarComponent // Asegúrate de incluir ProductoEditarComponent en las declaraciones
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
