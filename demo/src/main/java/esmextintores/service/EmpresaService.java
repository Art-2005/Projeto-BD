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
        return repository.save(empresa);
    }

    public List<Empresa> listarTodas() {
        return repository.findAll();
    }
}
