import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBalcoes } from '../hooks_cadastro/useBalcoes';
import { useClientes } from '../hooks_cadastro/useClientes';
import { useComerciais } from '../hooks_cadastro/useComerciais';
import { useEmpresas } from '../hooks_cadastro/useEmpresas';
import { useFuncionarios } from '../hooks_cadastro/useFuncionarios';
import { useIndustriais } from '../hooks_cadastro/useIndustriais';
import { useManutencoes } from '../hooks_cadastro/useManutencoes';
import { useRequisicoes } from '../hooks_cadastro/useRequisicoes';

import CadastroBalcao from '../components_cadastro/CadastroBalcao';
import CadastroCliente from '../components_cadastro/CadastroCliente';
import CadastroComercial from '../components_cadastro/CadastroComercial';
import CadastroEmpresa from '../components_cadastro/CadastroEmpresa';
import CadastroFuncionario from '../components_cadastro/CadastroFuncionario';
import CadastroIndustrial from '../components_cadastro/CadastroIndustrial';
import CadastroManutencao from '../components_cadastro/CadastroManutencao';
import CadastroRequisicao from '../components_cadastro/CadastroRequisicao';

export function Cadastro () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    const {
        balcoes,
        novoBalcao,
        handleChange: handleChangeBalcao,
        handleSubmit: handleSubmitBalcao,
        deletar: deletarBalcao
    } = useBalcoes();

    const {
        clientes,
        novoCliente,
        handleChange: handleChangeCliente,
        handleSubmit: handleSubmitCliente,
        deletar: deletarCliente
    } = useClientes();

    const {
        comerciais,
        novoComercial,
        handleChange: handleChangeComercial,
        handleSubmit: handleSubmitComercial,
        deletar: deletarComercial
    } = useComerciais();

    const {
        empresas,
        novaEmpresa,
        handleChange: handleChangeEmpresa,
        handleSubmit: handleSubmitEmpresa,
        deletar: deletarEmpresa
    } = useEmpresas();

    const {
        funcionarios,
        novoFuncionario,
        handleChange: handleChangeFuncionario,
        handleSubmit: handleSubmitFuncionario,
        deletar: deletarFuncionario
    } = useFuncionarios();

    const {
        industriais,
        novoIndustrial,
        handleChange: handleChangeIndustrial,
        handleSubmit: handleSubmitIndustrial,
        deletar: deletarIndustrial
    } = useIndustriais();

    const {
        manutencoes,
        novaManutencao,
        setNovaManutencao,
        handleSubmit: handleSubmitManutencao,
        deletar: deletarManutencao
    } = useManutencoes();

    const {
        requisicoes,
        novaRequisicao,
        handleChange: handleChangeRequisicao,
        handleSubmit: handleSubmitRequisicao,
        deletar: deletarRequisicao
    } = useRequisicoes();

    return (

        <div>

            <div>
                <button onClick={handleClick}>
                    Voltar
                </button>
            </div>

            <div style={{display: 'flex', gap: '40px', padding: '20px'}}>

                <CadastroBalcao
                    novoBalcao={novoBalcao}
                    handleChangeBalcao={handleChangeBalcao}
                    handleSubmitBalcao={handleSubmitBalcao}
                    balcoes={balcoes}
                    deletarBalcao={deletarBalcao}
                />

                <CadastroCliente
                    novoCliente={novoCliente}
                    handleChangeCliente={handleChangeCliente}
                    handleSubmitCliente={handleSubmitCliente}
                    clientes={clientes}
                    deletarCliente={deletarCliente}
                />

                <CadastroComercial
                    novoComercial={novoComercial}
                    handleChangeComercial={handleChangeComercial}
                    handleSubmitComercial={handleSubmitComercial}
                    comerciais={comerciais}
                    deletarComercial={deletarComercial}
                />

                <CadastroEmpresa
                    novaEmpresa={novaEmpresa}
                    handleChangeEmpresa={handleChangeEmpresa}
                    handleSubmitEmpresa={handleSubmitEmpresa}
                    empresas={empresas}
                    deletarEmpresa={deletarEmpresa}
                />

            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '20px'}}>
                <div style={{display: 'flex', gap: '40px', padding: '20px'}}>

                    <CadastroFuncionario
                        novoFuncionario={novoFuncionario}
                        handleChangeFuncionario={handleChangeFuncionario}
                        handleSubmitFuncionario={handleSubmitFuncionario}
                        funcionarios={funcionarios}
                        deletarFuncionario={deletarFuncionario}
                    />

                    <CadastroIndustrial
                        novoIndustrial={novoIndustrial}
                        handleChangeIndustrial={handleChangeIndustrial}
                        handleSubmitIndustrial={handleSubmitIndustrial}
                        industriais={industriais}
                        deletarIndustrial={deletarIndustrial}
                    />

                    <CadastroManutencao
                        novaManutencao={novaManutencao}
                        setNovaManutencao={setNovaManutencao}
                        handleSubmitManutencao={handleSubmitManutencao}
                        manutencoes={manutencoes}
                        deletarManutencao={deletarManutencao}
                    />

                    <CadastroRequisicao
                        novaRequisicao={novaRequisicao}
                        handleChangeRequisicao={handleChangeRequisicao}
                        handleSubmitRequisicao={handleSubmitRequisicao}
                        requisicoes={requisicoes}
                        deletarRequisicao={deletarRequisicao}
                    />

                </div>
            </div>

            <style>{`
                .form-box {
                    max-width: 400px;
                    width: 100%;
                    padding: 20px;
                    border: 2px solid #ccc;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
