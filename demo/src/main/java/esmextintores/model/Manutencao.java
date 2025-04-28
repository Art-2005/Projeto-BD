package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "manutencao")
public class Manutencao {

    @Id
    private String numeroregistro;

    private LocalDate data;
    private String historico;

    public Manutencao() {
    }

    public Manutencao(String numeroregistro, LocalDate data, String historico) {
        this.numeroregistro = numeroregistro;
        this.data = data;
        this.historico = historico;
    }


    public String getNumeroregistro() {
        return numeroregistro;
    }

    public void setNumeroregistro(String numeroregistro) {
        this.numeroregistro = numeroregistro;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        this.historico = historico;
    }
}
