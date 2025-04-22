import React, { useEffect, useState } from "react";
import EmpresaForm from "../../components/EmpresaForm";
import EmpresaList from "../../components/EmpresaList";
import { listarEmpresas } from "../../services/empresaService";

const Home = () => {
    const [empresas, setEmpresas] = useState([]);

    const carregarEmpresas = async () => {
        const dados = await listarEmpresas();
        setEmpresas(dados);
    };

    useEffect(() => {
        carregarEmpresas();
    }, []);

    return (
        <div>
            <h1>Cadastro de Empresas</h1>
            <EmpresaForm onEmpresaCriada={carregarEmpresas} />
            <EmpresaList empresas={empresas} />
        </div>
    );
};

export default Home;
