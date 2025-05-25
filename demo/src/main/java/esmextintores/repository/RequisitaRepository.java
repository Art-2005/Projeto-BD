package esmextintores.repository;

import esmextintores.model.Requisita;
import esmextintores.model.RequisitaId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequisitaRepository extends JpaRepository<Requisita, RequisitaId> {
}