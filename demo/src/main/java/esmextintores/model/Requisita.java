package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "requisita")
public class Requisita {
    @Id
    private String id;

    private String data;
    private String valor;
    private String fk_Empresa_CNPJ;
    private String fk_Manutencao_numeroregistro;

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getFk_Empresa_CNPJ() {
        return fk_Empresa_CNPJ;
    }

    public void setFk_Empresa_CNPJ(String fk_Empresa_CNPJ) {
        this.fk_Empresa_CNPJ = fk_Empresa_CNPJ;
    }

    public String getFk_Manutencao_numeroregistro() {
        return fk_Manutencao_numeroregistro;
    }

    public void setFk_Manutencao_numeroregistro(String fk_Manutencao_numeroregistro) {
        this.fk_Manutencao_numeroregistro = fk_Manutencao_numeroregistro;
    }
}
