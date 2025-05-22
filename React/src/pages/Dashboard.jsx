import { useState } from 'react';
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
import CadastroEmpresa from '../components_cadastro/CadastroEmpresa'
import CadastroFuncionario from '../components_cadastro/CadastroFuncionario'
import CadastroIndustrial from '../components_cadastro/CadastroIndustrial'
import CadastroManutencao from '../components_cadastro/CadastroManutencao'
import CadastroRequisicao from '../components_cadastro/CadastroRequisicao'
const TABS = [
  'Balcões', 'Clientes', 'Comerciais', 'Empresas',
  'Funcionários', 'Industriais', 'Manutenções', 'Requisições'
];


function Cadastro() {
  const [activeTab, setActiveTab] = useState('Balcões');

  const { balcoes, novoBalcao, handleChange: handleChangeBalcao, handleSubmit: handleSubmitBalcao, deletar: deletarBalcao } = useBalcoes();
  const { clientes, novoCliente, handleChange: handleChangeCliente, handleSubmit: handleSubmitCliente, deletar: deletarCliente } = useClientes();
  const { comerciais, novoComercial, handleChange: handleChangeComercial, handleSubmit: handleSubmitComercial, deletar: deletarComercial } = useComerciais();
  const { empresas, novaEmpresa, handleChange: handleChangeEmpresa, handleSubmit: handleSubmitEmpresa, deletar: deletarEmpresa } = useEmpresas();
  const { funcionarios, novoFuncionario, handleChange: handleChangeFuncionario, handleSubmit: handleSubmitFuncionario, deletar: deletarFuncionario } = useFuncionarios();
  const { industriais, novoIndustrial, handleChange: handleChangeIndustrial, handleSubmit: handleSubmitIndustrial, deletar: deletarIndustrial } = useIndustriais();
  const { manutencoes, novaManutencao, setNovaManutencao, handleSubmit: handleSubmitManutencao, deletar: deletarManutencao } = useManutencoes();
  const { requisicoes, novaRequisicao, handleChange: handleChangeRequisicao, handleSubmit: handleSubmitRequisicao, deletar: deletarRequisicao } = useRequisicoes();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Balcões':
        return <CadastroBalcao {...{ novoBalcao, handleChangeBalcao, handleSubmitBalcao, balcoes, deletarBalcao }} />;
      case 'Clientes':
        return <CadastroCliente {...{ novoCliente, handleChangeCliente, handleSubmitCliente, clientes, deletarCliente }} />;
      case 'Comerciais':
        return <CadastroComercial {...{ novoComercial, handleChangeComercial, handleSubmitComercial, comerciais, deletarComercial }} />;
      case 'Empresas':
        return <CadastroEmpresa {...{ novaEmpresa, handleChangeEmpresa, handleSubmitEmpresa, empresas, deletarEmpresa }} />;
      case 'Funcionários':
        return <CadastroFuncionario {...{ novoFuncionario, handleChangeFuncionario, handleSubmitFuncionario, funcionarios, deletarFuncionario }} />;
      case 'Industriais':
        return <CadastroIndustrial {...{ novoIndustrial, handleChangeIndustrial, handleSubmitIndustrial, industriais, deletarIndustrial }} />;
      case 'Manutenções':
        return <CadastroManutencao {...{ novaManutencao, setNovaManutencao, handleSubmitManutencao, manutencoes, deletarManutencao }} />;
      case 'Requisições':
        return <CadastroRequisicao {...{ novaRequisicao, handleChangeRequisicao, handleSubmitRequisicao, requisicoes, deletarRequisicao }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>Painel de Cadastros</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#4f46e5' : '#e0e0e0',
              color: activeTab === tab ? '#fff' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#f9f9f9',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Cadastro