package esmextintores.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@IdClass(Requisita.class)
@Table(name = "requisita")
public class Requisita {

    @Id
    @ManyToOne
    @JoinColumn(name = "manutencao_numeroregistro", referencedColumnName = "numeroregistro")
    private Manutencao manutencao;

    @Id
    @ManyToOne
    @JoinColumn(name = "empresa_cnpj", referencedColumnName = "cnpj")
    private Empresa empresa;

    private Double valor;
    private LocalDate data;

    public Requisita() {
    }

    public Requisita(Manutencao manutencao, Empresa empresa, Double valor, LocalDate data) {
        this.manutencao = manutencao;
        this.empresa = empresa;
        this.valor = valor;
        this.data = data;
    }

    public Manutencao getManutencao() {
        return manutencao;
    }

    public void setManutencao(Manutencao manutencao) {
        this.manutencao = manutencao;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
}
