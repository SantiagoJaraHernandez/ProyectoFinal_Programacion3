package com.example.demo.models.services;

import com.example.demo.models.entity.Producto;

import java.util.List;
import java.util.Optional;

public interface IProductoService {
    List<Producto> findAll();
    Optional<Producto> findById(Long id);
    Producto save(Producto producto);
    void delete(Long id);
}
