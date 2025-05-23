package esmextintores.controller;

import esmextintores.model.Balcao;
import esmextintores.service.BalcaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/balcoes")
public class BalcaoController {

    private final BalcaoService service;

    public BalcaoController(BalcaoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Balcao> criar(@RequestBody Balcao balcao) {
        Balcao salvo = service.salvar(balcao);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<Balcao>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping
    public ResponseEntity<Void> deletar(@RequestParam String cnpj) {
        service.deletar(cnpj);
        return ResponseEntity.noContent().build();
    }
}
