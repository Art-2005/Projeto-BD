package esmextintores.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class DashboardInterativoProcedureService {

    @PersistenceContext
    private EntityManager entityManager;

    public Map<String, Double> obterDados(String metrica) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("proc_dashboard_esm");

        query.registerStoredProcedureParameter("metrica", String.class, ParameterMode.IN);
        query.setParameter("metrica", metrica);

        boolean hasResult = query.execute();
        Map<String, Double> resultado = new LinkedHashMap<>();

        if (hasResult) {
            List<Object[]> lista = query.getResultList();
            for (Object[] row : lista) {
                String chave = row[0] != null ? row[0].toString() : "N/A";
                Double valor = row[1] != null ? Double.parseDouble(row[1].toString()) : 0.0;
                resultado.put(chave, valor);
            }
        }

        return resultado;
    }
}
