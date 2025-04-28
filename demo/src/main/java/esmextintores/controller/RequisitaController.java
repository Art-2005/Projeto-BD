package esmextintores.controller;

import esmextintores.model.Requisita;
import esmextintores.service.RequisitaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requisicoes")
public class RequisitaController {

    private final RequisitaService service;

    public RequisitaController(RequisitaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Requisita> criar(@RequestBody Requisita requisita) {
        Requisita salva = service.salvar(requisita);
        return ResponseEntity.ok(salva);
    }

    @GetMapping
    public ResponseEntity<List<Requisita>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable String id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
