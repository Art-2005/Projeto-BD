package esmextintores.service;

import esmextintores.model.Empresa;
import esmextintores.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void deletar(String cnpj) {
        repository.deleteById(cnpj);
    }

    public Empresa atualizar(String cnpj, Empresa novaEmpresa) {
        Optional<Empresa> existente = repository.findById(cnpj);
        if (existente.isPresent()) {
            Empresa empresa = existente.get();
            empresa.setNome(novaEmpresa.getNome());
            empresa.setNomeFantasia(novaEmpresa.getNomeFantasia());
            empresa.setEstado(novaEmpresa.getEstado());
            empresa.setRua(novaEmpresa.getRua());
            empresa.setBairro(novaEmpresa.getBairro());
            empresa.setCep(novaEmpresa.getCep());
            empresa.setNumero(novaEmpresa.getNumero());
            empresa.setChefia(novaEmpresa.getChefia());
            return repository.save(empresa);
        } else {
            throw new RuntimeException("Empresa com CNPJ " + cnpj + " não encontrada.");
        }
    }
}
