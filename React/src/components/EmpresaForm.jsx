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
        chefia: ""
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
                chefia: ""
            });
            alert("Empresa cadastrada com sucesso!");
        } catch (err) {
            alert("Erro ao cadastrar empresa");
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Object.entries(empresa).map(([campo, valor]) => (
                <input
                    key={campo}
                    name={campo}
                    value={valor}
                    onChange={handleChange}
                    placeholder={campo}
                    required
                />
            ))}
            <button type="submit">Salvar Empresa</button>
        </form>
    );
};

export default EmpresaForm;
