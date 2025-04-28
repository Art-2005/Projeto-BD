package esmextintores.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    private String numerocadastro;

    private String nome;
    private String telefone;
    private String historico;
    private String servicos;
    private String email;

    public Cliente() {
    }

    public Cliente(String numerocadastro, String nome, String telefone, String historico, String servicos, String email) {
        this.numerocadastro = numerocadastro;
        this.nome = nome;
        this.telefone = telefone;
        this.historico = historico;
        this.servicos = servicos;
        this.email = email;
    }

    public String getNumerocadastro() {
        return numerocadastro;
    }

    public void setNumerocadastro(String numerocadastro) {
        this.numerocadastro = numerocadastro;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        this.historico = historico;
    }

    public String getServicos() {
        return servicos;
    }

    public void setServicos(String servicos) {
        this.servicos = servicos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
