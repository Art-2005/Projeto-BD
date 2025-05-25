package esmextintores.service;

import esmextintores.model.Requisita;
import esmextintores.model.RequisitaId;
import esmextintores.repository.RequisitaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequisitaService {

    private final RequisitaRepository repository;

    public RequisitaService(RequisitaRepository repository) {
        this.repository = repository;
    }

    public Requisita salvar(Requisita requisita) {
        return repository.save(requisita);
    }

    public List<Requisita> listarTodos() {
        return repository.findAll();
    }

    public void deletar(RequisitaId id) {
        repository.deleteById(id);
    }
}