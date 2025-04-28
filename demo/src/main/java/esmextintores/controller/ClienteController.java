package esmextintores.controller;

import esmextintores.model.Cliente;
import esmextintores.service.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Cliente> criar(@RequestBody Cliente cliente) {
        Cliente salvo = service.salvar(cliente);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listar() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @DeleteMapping("/{numerocadastro}")
    public ResponseEntity<Void> deletar(@PathVariable String numerocadastro) {
        service.deletar(numerocadastro);
        return ResponseEntity.noContent().build();
    }
}
