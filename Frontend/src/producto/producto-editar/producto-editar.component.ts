import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  producto: Producto;
  mostrarAlerta: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id).subscribe(producto => this.producto = producto);
  }

  guardarCambios(): void {
    this.productoService.updateProducto(this.producto.id, this.producto).subscribe(() => {
      this.mostrarAlerta = true; // Mostrar la alerta
      // Después de 3 segundos, ocultar la alerta
      setTimeout(() => {
        this.mostrarAlerta = false;
        this.router.navigate(['/productos']);
      }, 3000);
    });
  }
}
