package esmextintores.service;

import esmextintores.model.Requisita;
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
        System.out.println("Valor: " + requisita.getValor());
        System.out.println("Data: " + requisita.getData());
        return repository.save(requisita);
    }

    public List<Requisita> listarTodas() {
        return repository.findAll();
    }

    public void deletar(String id) {
        repository.deleteById(id);
    }
}
