package esmextintores.service;

import esmextintores.model.Empresa;
import esmextintores.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaService {

    private final EmpresaRepository repository;

    public EmpresaService(EmpresaRepository repository) {
        this.repository = repository;
    }

    public Empresa salvar(Empresa empresa) {
        System.out.println("CNPJ: " + empresa.getCnpj());
        System.out.println("Nome: " + empresa.getNome());
        System.out.println("Nome Fantasia: " + empresa.getNomeFantasia());
        return repository.save(empresa);
    }

    public List<Empresa> listarTodas() {
        return repository.findAll();
    }

    public void deletar(String cnpj) {
        repository.deleteById(cnpj);
    }
}
