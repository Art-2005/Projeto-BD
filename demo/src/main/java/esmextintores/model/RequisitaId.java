package esmextintores.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class RequisitaId implements Serializable {
    private String fk_Empresa_CNPJ;
    private String fk_Manutencao_numeroregistro;

    public RequisitaId() {}

    public RequisitaId(String fk_Empresa_CNPJ, String fk_Manutencao_numeroregistro) {
        this.fk_Empresa_CNPJ = fk_Empresa_CNPJ;
        this.fk_Manutencao_numeroregistro = fk_Manutencao_numeroregistro;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequisitaId that = (RequisitaId) o;
        return Objects.equals(fk_Empresa_CNPJ, that.fk_Empresa_CNPJ) &&
               Objects.equals(fk_Manutencao_numeroregistro, that.fk_Manutencao_numeroregistro);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fk_Empresa_CNPJ, fk_Manutencao_numeroregistro);
    }
}