import React, { useEffect, useState } from "react";
import { listarEmpresas } from "../services/empresaService";

const EmpresaList = () => {
  const [empresas, setEmpresas] = useState([]);

  const carregarEmpresas = async () => {
    try {
      const response = await listarEmpresas();
      setEmpresas(response.data);
    } catch (error) {
      console.error("Erro ao buscar empresas", error);
    }
  };

  useEffect(() => {
    carregarEmpresas();
  }, []);

  return (
    <div>
      <h2>Empresas Cadastradas</h2>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.cnpj}>
            {empresa.nomeFantasia} - {empresa.cnpj}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresaList;
