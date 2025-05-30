package esmextintores.controller;

import esmextintores.service.DashboardInterativoProcedureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/dashboard-interativo-procedure")
public class DashboardInterativoProcedureController {

    @Autowired
    private DashboardInterativoProcedureService dashboardService;

    @GetMapping
    public String exibirDashboard() {
        return "dashboard-interativo-procedure"; // Nome da página HTML em src/main/resources/templates
    }

    @PostMapping("/dados")
    @ResponseBody
    public Map<String, Double> obterDadosDashboard(@RequestBody Map<String, String> params) {
        String metrica = params.get("metrica");
        return dashboardService.obterDados(metrica);
    }
}
