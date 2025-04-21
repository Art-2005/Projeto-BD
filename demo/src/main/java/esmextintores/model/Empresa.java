package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Empresa {

    @Id
    private String cnpj;

    private String nome;
    private String nomeFantasia;
    private String estado;
    private String rua;
    private String bairro;
    private String cep;
    private String numero;
    private String chefia;

    public Empresa() {
    }

    public Empresa(String cnpj, String nome, String nomeFantasia, String estado, String rua, String bairro, String cep, String numero, String chefia) {
        this.cnpj = cnpj;
        this.nome = nome;
        this.nomeFantasia = nomeFantasia;
        this.estado = estado;
        this.rua = rua;
        this.bairro = bairro;
        this.cep = cep;
        this.numero = numero;
        this.chefia = chefia;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
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

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getChefia() {
        return chefia;
    }

    public void setChefia(String chefia) {
        this.chefia = chefia;
    }
}
