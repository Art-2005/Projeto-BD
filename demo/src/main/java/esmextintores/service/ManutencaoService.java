package esmextintores.service;

import esmextintores.model.Manutencao;
import esmextintores.repository.ManutencaoRepository;
import esmextintores.repository.RequisitaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManutencaoService {

    private final ManutencaoRepository repository;
    private final RequisitaRepository requisitaRepository;

    public ManutencaoService(ManutencaoRepository repository, RequisitaRepository requisitaRepository) {
        this.repository = repository;
        this.requisitaRepository = requisitaRepository;
    }

    public Manutencao salvar(Manutencao manutencao) {
        System.out.println("Número Registro: " + manutencao.getNumeroregistro());
        System.out.println("Data: " + manutencao.getData());
        return repository.save(manutencao);
    }

    public List<Manutencao> listarTodas() {
        return repository.findAll();
    }

    public void deletar(String numeroregistro) {
        System.out.println("Tentando deletar: " + numeroregistro);
        repository.deleteById(numeroregistro);
    }
}

