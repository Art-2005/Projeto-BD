package esmextintores.controller;

import esmextintores.model.Empresa;
import esmextintores.service.EmpresaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    private final EmpresaService service;

    public EmpresaController(EmpresaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Empresa> criar(@RequestBody Empresa empresa) {
        Empresa salva = service.salvar(empresa);
        return ResponseEntity.ok(salva);
    }

    @GetMapping
    public ResponseEntity<List<Empresa>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @DeleteMapping("/{cnpj}")
    public ResponseEntity<Void> deletar(@PathVariable String cnpj) {
        service.deletar(cnpj);
        return ResponseEntity.noContent().build();
    }

}
