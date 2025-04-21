import React, { useState } from "react";
import EmpresaForm from "../../components/EmpresaForm";
import EmpresaList from "../../components/EmpresaList";

const Home = () => {
  const [reload, setReload] = useState(false);

  const handleEmpresaCriada = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1>Cadastro de Empresas</h1>
      <EmpresaForm onEmpresaCriada={handleEmpresaCriada} />
      <EmpresaList key={reload} />
    </div>
  );
};

export default Home;

