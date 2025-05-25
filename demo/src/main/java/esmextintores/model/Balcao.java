package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "balcao")
public class Balcao {

    @Id
    private String cnpj;

    private String telefone;
    private String estado;
    private String bairro;
    private String cep;
    private String rua;
    private String numero;

    private String fk_Cliente_numerocadastro; // <- Adicionado aqui

    public Balcao() {}

    public Balcao(String cnpj, String telefone, String estado, String bairro, String cep, String rua, String numero, String fk_Cliente_numerocadastro) {
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.estado = estado;
        this.bairro = bairro;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.fk_Cliente_numerocadastro = fk_Cliente_numerocadastro;
    }

    // Getters e Setters
    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getFk_Cliente_numerocadastro() {
        return fk_Cliente_numerocadastro;
    }

    public void setFk_Cliente_numerocadastro(String fk_Cliente_numerocadastro) {
        this.fk_Cliente_numerocadastro = fk_Cliente_numerocadastro;
    }
}
