package esmextintores.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/relatorios")
public class RelatorioController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/empresas-por-bairro")
    public List<Map<String, Object>> empresasPorBairro() {
        return jdbcTemplate.queryForList("""
            SELECT bairro, COUNT(*) AS total_empresas
            FROM Empresa
            GROUP BY bairro
            ORDER BY total_empresas DESC
        """);
    }

    @GetMapping("/funcionarios-por-estado")
    public List<Map<String, Object>> funcionariosPorEstado() {
        return jdbcTemplate.queryForList("""
            SELECT estado, COUNT(*) AS total_funcionarios
            FROM Funcionario
            GROUP BY estado
            ORDER BY total_funcionarios DESC
        """);
    }

    @GetMapping("/media-salarial")
    public Map<String, Object> mediaSalarial() {
        return jdbcTemplate.queryForMap("SELECT AVG(salario) AS media_salarial FROM Funcionario");
    }

    @GetMapping("/clientes-servicos")
    public List<Map<String, Object>> clientesServicos() {
        return jdbcTemplate.queryForList("""
            SELECT nome, servicos
            FROM Cliente
            ORDER BY servicos DESC
        """);
    }

    @GetMapping("/hospitais")
    public List<Map<String, Object>> hospitais() {
        return jdbcTemplate.queryForList("""
            SELECT * FROM Empresa
            WHERE NomeFantasia LIKE '%Hospital%'
        """);
    }

    @GetMapping("/ultimas-manutencoes")
    public List<Map<String, Object>> ultimasManutencoes() {
        return jdbcTemplate.queryForList("""
            SELECT * FROM Manutencao
            ORDER BY data DESC
            LIMIT 10
        """);
    }

    @GetMapping("/total-logs")
    public List<Map<String, Object>> totalLogs() {
        return jdbcTemplate.queryForList("""
            SELECT 'empresa' AS entidade, COUNT(*) AS total FROM log_empresa
            UNION SELECT 'funcionario', COUNT(*) FROM log_funcionario
            UNION SELECT 'cliente', COUNT(*) FROM log_cliente
            UNION SELECT 'manutencao', COUNT(*) FROM log_manutencao
            UNION SELECT 'comercial', COUNT(*) FROM log_comercial
            UNION SELECT 'residencial', COUNT(*) FROM log_residencial
            UNION SELECT 'balcao', COUNT(*) FROM log_balcao
            UNION SELECT 'requisita', COUNT(*) FROM log_requisita
            UNION SELECT 'industrial', COUNT(*) FROM log_industrial
        """);
    }

    @GetMapping("/comerciais-por-bairro")
    public List<Map<String, Object>> comerciaisPorBairro() {
        return jdbcTemplate.queryForList("""
            SELECT bairro, COUNT(*) AS total_comerciais
            FROM Comercial
            GROUP BY bairro
            ORDER BY total_comerciais DESC
        """);
    }

    @GetMapping("/clientes-com-residenciais")
    public List<Map<String, Object>> clientesComResidenciais() {
        return jdbcTemplate.queryForList("""
            SELECT c.nome, COUNT(*) AS total_residenciais
            FROM Cliente c
            JOIN Residencial r ON r.fk_Cliente_numerocadastro = c.numerocadastro
            GROUP BY c.nome
        """);
    }

    @GetMapping("/industriais-duplicados")
    public List<Map<String, Object>> industriasDuplicadas() {
        return jdbcTemplate.queryForList("""
            SELECT * FROM Industrial
            WHERE fk_Cliente_numerocadastro = fk_Cliente_numerocadastro_1
        """);
    }
}
