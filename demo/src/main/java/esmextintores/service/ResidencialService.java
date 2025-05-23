package esmextintores.service;

import esmextintores.model.Residencial;
import esmextintores.repository.ResidencialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidencialService {

    private final ResidencialRepository repository;

    public ResidencialService(ResidencialRepository repository) {
        this.repository = repository;
    }

    public Residencial salvar(Residencial residencial) {
        System.out.println("Cadastrando/Atualizando Residencial: " + residencial.getCnpj());
        return repository.save(residencial);
    }

    public List<Residencial> listarTodos() {
        return repository.findAll();
    }

    public void deletar(String cnpj) {
        System.out.println("Deletando Residencial com CNPJ: " + cnpj);
        repository.deleteById(cnpj);
    }
}
