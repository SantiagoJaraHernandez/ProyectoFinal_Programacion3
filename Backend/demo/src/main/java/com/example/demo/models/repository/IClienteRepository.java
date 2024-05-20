package com.example.demo.models.repository;

import com.example.demo.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteRepository extends CrudRepository<Cliente, Long> {
}
