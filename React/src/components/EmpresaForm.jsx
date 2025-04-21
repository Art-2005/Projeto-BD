import React, { useState } from "react";
import { criarEmpresa } from "../services/empresaService";

const EmpresaForm = ({ onEmpresaCriada }) => {
  const [empresa, setEmpresa] = useState({
    cnpj: "",
    nome: "",
    nomeFantasia: "",
    estado: "",
    rua: "",
    bairro: "",
    cep: "",
    numero: "",
    chefia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarEmpresa(empresa);
      onEmpresaCriada();
      setEmpresa({
        cnpj: "",
        nome: "",
        nomeFantasia: "",
        estado: "",
        rua: "",
        bairro: "",
        cep: "",
        numero: "",
        chefia: "",
      });
    } catch (error) {
      console.error("Erro ao criar empresa", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(empresa).map((campo) => (
        <input
          key={campo}
          type="text"
          name={campo}
          placeholder={campo}
          value={empresa[campo]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Criar Empresa</button>
    </form>
  );
};

export default EmpresaForm;
