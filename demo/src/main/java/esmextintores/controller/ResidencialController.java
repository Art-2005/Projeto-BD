package esmextintores.controller;

import esmextintores.model.Residencial;
import esmextintores.service.ResidencialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/residenciais")
public class ResidencialController {

    private final ResidencialService service;

    public ResidencialController(ResidencialService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Residencial> criar(@RequestBody Residencial residencial) {
        Residencial salvo = service.salvar(residencial);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<Residencial>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping
    public ResponseEntity<Void> deletar(@RequestParam String cnpj) {
        service.deletar(cnpj);
        return ResponseEntity.noContent().build();
    }
}
