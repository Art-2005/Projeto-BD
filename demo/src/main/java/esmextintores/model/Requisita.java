package esmextintores.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

@Entity
public class Requisita {

    @EmbeddedId
    private RequisitaId id;

    private String data;
    private String valor;

    public RequisitaId getId() {
        return id;
    }

    public void setId(RequisitaId id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }
}