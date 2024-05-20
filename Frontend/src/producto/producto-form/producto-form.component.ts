import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    precio: 0,
    disponible: false,
    id: 0
  };

  mostrarNotificacion: boolean = false; // Variable para controlar la visibilidad de la notificación

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProducto(+id).subscribe((data: Producto) => {
        this.producto = data;
      });
    }
  }

  saveProducto(): void {
    if (this.producto.id) {
      this.productoService.updateProducto(this.producto.id, this.producto).subscribe(() => {
        this.mostrarNotificacion = true; // Mostrar notificación
        setTimeout(() => {
          this.mostrarNotificacion = false; // Ocultar notificación después de 3 segundos
          this.router.navigate(['/']);
        }, 3000);
      });
    } else {
      this.productoService.createProducto(this.producto).subscribe(() => {
        this.mostrarNotificacion = true; // Mostrar notificación
        setTimeout(() => {
          this.mostrarNotificacion = false; // Ocultar notificación después de 3 segundos
          this.router.navigate(['/']);
        }, 3000);
      });
    }
  }

  ocultarNotificacion(): void {
    this.mostrarNotificacion = false;
  }
}
