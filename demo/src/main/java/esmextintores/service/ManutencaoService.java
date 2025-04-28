package esmextintores.service;

import esmextintores.model.Manutencao;
import esmextintores.repository.ManutencaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManutencaoService {

    private final ManutencaoRepository repository;

    public ManutencaoService(ManutencaoRepository repository) {
        this.repository = repository;
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
        repository.deleteById(numeroregistro);
    }
}
