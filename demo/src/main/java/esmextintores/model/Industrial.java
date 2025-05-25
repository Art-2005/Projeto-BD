package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "industrial")
public class Industrial {

    @Id
    private String cnpj;

    private String telefone;
    private String estado;
    private String bairro;
    private String cep;
    private String rua;
    private String numero;
    private String nomeEmpresa;

    private String fk_Cliente_numerocadastro;


    // Construtor padrão
    public Industrial() {}

    // Construtor completo com os novos campos
    public Industrial(String cnpj, String telefone, String estado, String bairro, String cep, String rua, String numero, String nomeEmpresa, String fk_Cliente_numerocadastro, String fk_Cliente_numerocadastro_1) {
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.estado = estado;
        this.bairro = bairro;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.nomeEmpresa = nomeEmpresa;
        this.fk_Cliente_numerocadastro = fk_Cliente_numerocadastro;
    }

    // Getters e setters
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

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getFk_Cliente_numerocadastro() {
        return fk_Cliente_numerocadastro;
    }

    public void setFk_Cliente_numerocadastro(String fk_Cliente_numerocadastro) {
        this.fk_Cliente_numerocadastro = fk_Cliente_numerocadastro;
    }
}
