package esmextintores.service;

import esmextintores.model.Cliente;
import esmextintores.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository repository;

    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public Cliente salvar(Cliente cliente) {
        System.out.println("Número Cadastro: " + cliente.getNumerocadastro());
        System.out.println("Nome: " + cliente.getNome());
        return repository.save(cliente);
    }

    public List<Cliente> listarTodos() {
        return repository.findAll();
    }

    public void deletar(String numerocadastro) {
        repository.deleteById(numerocadastro);
    }
}
