package esmextintores.controller;

import esmextintores.model.Requisita;
import esmextintores.model.RequisitaId;
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
    public ResponseEntity<Requisita> salvar(@RequestBody Requisita requisita) {
        return ResponseEntity.ok(service.salvar(requisita));
    }

    @GetMapping
    public ResponseEntity<List<Requisita>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping
    public ResponseEntity<Void> deletar(@RequestParam String fk_Empresa_CNPJ,
                                        @RequestParam String fk_Manutencao_numeroregistro) {
        RequisitaId id = new RequisitaId(fk_Empresa_CNPJ, fk_Manutencao_numeroregistro);
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}