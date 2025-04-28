package esmextintores.service;

import esmextintores.model.Industrial;
import esmextintores.repository.IndustrialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustrialService {

    private final IndustrialRepository repository;

    public IndustrialService(IndustrialRepository repository) {
        this.repository = repository;
    }

    public Industrial salvar(Industrial industrial) {
        System.out.println("CNPJ: " + industrial.getCnpj());
        System.out.println("Nome da Empresa: " + industrial.getNomeEmpresa());
        return repository.save(industrial);
    }

    public List<Industrial> listarTodos() {
        return repository.findAll();
    }

    public void deletar(String cnpj) {
        repository.deleteById(cnpj);
    }
}
