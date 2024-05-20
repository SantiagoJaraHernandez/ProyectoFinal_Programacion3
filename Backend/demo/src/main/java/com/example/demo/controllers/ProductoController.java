package com.example.demo.controllers;

import com.example.demo.exeption.ResourceNotFoundException;
import com.example.demo.models.entity.Producto;
import com.example.demo.models.services.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.findAll();
    }

    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable Long id) {
        Optional<Producto> producto = productoService.findById(id);
        if (!producto.isPresent()) {
            throw new ResourceNotFoundException("Producto no encontrado con id: " + id);
        }
        return producto.get();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.save(producto);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Producto updateProducto(@RequestBody Producto productoDetails, @PathVariable Long id) {
        Optional<Producto> productoOptional = productoService.findById(id);
        if (!productoOptional.isPresent()) {
            throw new ResourceNotFoundException("Producto no encontrado con id: " + id);
        }
        Producto productoActual = productoOptional.get();
        productoActual.setNombre(productoDetails.getNombre());
        productoActual.setPrecio(productoDetails.getPrecio());
        productoActual.setDisponible(productoDetails.isDisponible());

        return productoService.save(productoActual);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProducto(@PathVariable Long id) {
        Optional<Producto> productoOptional = productoService.findById(id);
        if (!productoOptional.isPresent()) {
            throw new ResourceNotFoundException("Producto no encontrado con id: " + id);
        }
        productoService.delete(id);
    }
}
