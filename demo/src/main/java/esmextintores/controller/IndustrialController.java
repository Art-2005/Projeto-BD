package esmextintores.controller;

import esmextintores.model.Industrial;
import esmextintores.service.IndustrialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/industriais")
public class IndustrialController {

    private final IndustrialService service;

    public IndustrialController(IndustrialService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Industrial> criar(@RequestBody Industrial industrial) {
        Industrial salvo = service.salvar(industrial);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<Industrial>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping
    public ResponseEntity<Void> deletar(@RequestParam String cnpj) {
        service.deletar(cnpj);
        return ResponseEntity.noContent().build();
    }
}
