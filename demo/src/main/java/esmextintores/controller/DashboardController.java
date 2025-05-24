package esmextintores.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/empresas-por-bairro")
    public List<Map<String, Object>> empresasPorBairro() {
        String sql = "SELECT bairro, COUNT(*) AS total_empresas FROM Empresa GROUP BY bairro ORDER BY total_empresas DESC";
        return jdbcTemplate.queryForList(sql);
    }

    @GetMapping("/media-salarial")
    public Map<String, Object> mediaSalarial() {
        String sql = "SELECT AVG(salario) AS media_salarial FROM Funcionario";
        return jdbcTemplate.queryForMap(sql);
    }
}
