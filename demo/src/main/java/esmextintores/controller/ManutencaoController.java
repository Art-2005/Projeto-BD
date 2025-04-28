package esmextintores.controller;

import esmextintores.model.Manutencao;
import esmextintores.service.ManutencaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manutencoes")
public class ManutencaoController {

    private final ManutencaoService service;

    public ManutencaoController(ManutencaoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Manutencao> criar(@RequestBody Manutencao manutencao) {
        Manutencao salva = service.salvar(manutencao);
        return ResponseEntity.ok(salva);
    }

    @GetMapping
    public ResponseEntity<List<Manutencao>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @DeleteMapping("/{numeroregistro}")
    public ResponseEntity<Void> deletar(@PathVariable String numeroregistro) {
        service.deletar(numeroregistro);
        return ResponseEntity.noContent().build();
    }
}
