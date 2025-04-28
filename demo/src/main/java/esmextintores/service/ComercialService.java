package esmextintores.service;

import esmextintores.model.Comercial;
import esmextintores.repository.ComercialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComercialService {

    private final ComercialRepository repository;

    public ComercialService(ComercialRepository repository) {
        this.repository = repository;
    }

    public Comercial salvar(Comercial comercial) {
        System.out.println("CNPJ: " + comercial.getCnpj());
        System.out.println("Nome da Empresa: " + comercial.getNomeEmpresa());
        return repository.save(comercial);
    }

    public List<Comercial> listarTodos() {
        return repository.findAll();
    }

    public void deletar(String cnpj) {
        repository.deleteById(cnpj);
    }
}
