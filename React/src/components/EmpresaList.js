import React from "react";

const EmpresaList = ({ empresas }) => {
    return (
        <div>
            <h2>Empresas Cadastradas</h2>
            <table border="1" cellPadding="8">
                <thead>
                <tr>
                    <th>CNPJ</th>
                    <th>Nome</th>
                    <th>Nome Fantasia</th>
                    <th>Estado</th>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>CEP</th>
                    <th>Número</th>
                    <th>Chefia</th>
                </tr>
                </thead>
                <tbody>
                {empresas.map((e) => (
                    <tr key={e.cnpj}>
                        <td>{e.cnpj}</td>
                        <td>{e.nome}</td>
                        <td>{e.nomeFantasia}</td>
                        <td>{e.estado}</td>
                        <td>{e.rua}</td>
                        <td>{e.bairro}</td>
                        <td>{e.cep}</td>
                        <td>{e.numero}</td>
                        <td>{e.chefia}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmpresaList;
