package esmextintores.service;

import esmextintores.model.Balcao;
import esmextintores.repository.BalcaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BalcaoService {

    private final BalcaoRepository repository;

    public BalcaoService(BalcaoRepository repository) {
        this.repository = repository;
    }

    public Balcao salvar(Balcao balcao) {
        System.out.println("CNPJ: " + balcao.getCnpj());
        System.out.println("Telefone: " + balcao.getTelefone());
        return repository.save(balcao);
    }

    public List<Balcao> listarTodos() {
        return repository.findAll();
    }

    public void deletar(String cnpj) {
        repository.deleteById(cnpj);
    }
}
