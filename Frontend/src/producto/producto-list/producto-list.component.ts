import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  editProducto(producto: Producto): void {
    this.router.navigate(['/productos', producto.id, 'editar']);
    console.log('Editar producto:', producto);
  }

  deleteProducto(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      this.productoService.deleteProducto(id).subscribe(() => {
        this.productos = this.productos.filter(producto => producto.id !== id);
      });
    }
  }

  agregarProducto(): void {
    this.router.navigate(['/producto-form']);
  }
}
