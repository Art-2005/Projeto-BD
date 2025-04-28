package esmextintores.controller;

import esmextintores.model.Comercial;
import esmextintores.service.ComercialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comerciais")
public class ComercialController {

    private final ComercialService service;

    public ComercialController(ComercialService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Comercial> criar(@RequestBody Comercial comercial) {
        Comercial salvo = service.salvar(comercial);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<Comercial>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping("/{cnpj}")
    public ResponseEntity<Void> deletar(@PathVariable String cnpj) {
        service.deletar(cnpj);
        return ResponseEntity.noContent().build();
    }
}
