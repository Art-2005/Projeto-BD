import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastroBalcao from './components_cadastro/CadastroBalcao';
import CadastroCliente from './components_cadastro/CadastroCliente';
import CadastroComercial from './components_cadastro/CadastroComercial';
import CadastroEmpresa from './components_cadastro/CadastroEmpresa';
import CadastroFuncionario from './components_cadastro/CadastroFuncionario';
import CadastroIndustrial from './components_cadastro/CadastroIndustrial';
import CadastroManutencao from './components_cadastro/CadastroManutencao';
import CadastroRequisicao from './components_cadastro/CadastroRequisicao';

function App() {
  
  const [balcoes, setBalcoes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [comerciais, setComerciais] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [industriais, setIndustriais] = useState([]);
  const [manutencoes, setManutencoes] = useState([]);
  const [requisicoes, setRequisicoes] = useState([]);

  const [novoBalcao, setNovoBalcao] = useState({
    cnpj: "",
    telefone: "",
    estado: "",
    bairro: "",
    cep: "",
    rua: "",
    numero: ""
  });

  const [novoCliente, setNovoCliente] = useState({
    numerocadastro: "",
    nome: "",
    telefone: "",
    historico: "",
    servicos: "",
    email: ""
  });

  const [novoFuncionario, setNovoFuncionario] = useState({
    cpf: "", 
    nome: "", 
    cargo: "", 
    telefone: "", 
    email: ""
  });

  const [novoComercial, setNovoComercial] = useState({
    cnpj: "",
    nomeEmpresa: "",
    telefone: "",
    estado: "",
    bairro: "",
    cep: "",
    rua: "",
    numero: ""
  });

 const [novaEmpresa, setNovaEmpresa] = useState({
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

 const [novoIndustrial, setNovoIndustrial] = useState({
    cnpj: "",
    telefone: "",
    estado: "",
    bairro: "",
    cep: "",
    rua: "",
    numero: "",
    nomeEmpresa: ""
 });

 const [novaManutencao, setNovaManutencao] = useState({
    numeroregistro: "",
    data: "",
    historico: ""
 });

 
 const [novaRequisicao, setNovaRequisicao] = useState({
    idFuncionario: "",
    idCliente: "",
    data: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/balcoes")
     .then(res => setBalcoes(res.data))
     .catch(err => console.error("Erro ao carregar balcões:", err));

    axios.get("http://localhost:8080/clientes")
     .then(res => setClientes(res.data))
     .catch(err => console.error("Erro ao carregar clientes:", err));

    axios.get("http://localhost:8080/comerciais")
     .then(res => setComerciais(res.data))
     .catch(err => console.error("Erro ao carregar comerciais:", err));

    axios.get("http://localhost:8080/empresas")
     .then(res => setEmpresas(res.data))
     .catch(err => console.error("Erro ao carregar empresas:", err));

    axios.get("http://localhost:8080/funcionarios")
     .then(res => setFuncionarios(res.data))
     .catch(err => console.error("Erro ao carregar funcionários:", err));

    axios.get("http://localhost:8080/industriais")
     .then(res => setIndustriais(res.data))
     .catch(err => console.error("Erro ao carregar industriais:", err));

    axios.get("http://localhost:8080/manutencoes")
     .then(res => setManutencoes(res.data))
     .catch(err => console.error("Erro ao carregar manutenções:", err));

    axios.get("http://localhost:8080/requisicoes")
     .then(res => setRequisicoes(res.data))
     .catch(err => console.error("Erro ao carregar requisições:", err));

  }, []);

  const handleChangeBalcao = (e) => {
    setNovoBalcao({ ...novoBalcao, [e.target.name]: e.target.value });
  };

  const handleChangeCliente = (e) => {
    setNovoCliente({ ...novoCliente, [e.target.name]: e.target.value });
  };

  const handleChangeFuncionario = (e) => {
    setNovoFuncionario({ ...novoFuncionario, [e.target.name]: e.target.value });
  };

  const handleSubmitBalcao = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/balcoes", novoBalcao)
      .then(res => {
        setBalcoes([...balcoes, res.data]);
        setNovoBalcao({
          cnpj: "", telefone: "", estado: "", bairro: "",
          cep: "", rua: "", numero: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar balcão:", err));
  };

  const handleSubmitCliente = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/clientes", novoCliente)
      .then(res => {
        setClientes([...clientes, res.data]);
        setNovoCliente({
          numerocadastro: "", nome: "", telefone: "",
          historico: "", servicos: "", email: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar cliente:", err));
  };

  const deletarBalcao = (cnpj) => {
    axios.delete(`http://localhost:8080/balcoes/${cnpj}`)
      .then(() => setBalcoes(balcoes.filter(b => b.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar balcão:", err));
  };

  const deletarCliente = (numerocadastro) => {
    axios.delete(`http://localhost:8080/clientes/${numerocadastro}`)
      .then(() => setClientes(clientes.filter(c => c.numerocadastro !== numerocadastro)))
      .catch(err => console.error("Erro ao deletar cliente:", err));
  };

  const handleChangeComercial = (e) => {
    setNovoComercial({ ...novoComercial, [e.target.name]: e.target.value });
  };
  
  const handleSubmitComercial = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/comerciais", novoComercial)
      .then(res => {
        setComerciais([...comerciais, res.data]);
        setNovoComercial({
          cnpj: "", nomeEmpresa: "", telefone: "", estado: "", bairro: "",
          cep: "", rua: "", numero: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar comercial:", err));
  };
  
  const deletarComercial = (cnpj) => {
    axios.delete(`http://localhost:8080/comerciais/${cnpj}`)
      .then(() => setComerciais(comerciais.filter(c => c.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar comercial:", err));
  };

  const handleChangeEmpresa = (e) => {
    setNovaEmpresa({ ...novaEmpresa, [e.target.name]: e.target.value });
  };
  
  const handleSubmitEmpresa = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/empresas", novaEmpresa)
      .then(res => {
        setEmpresas([...empresas, res.data]);
        setNovaEmpresa({
          cnpj: "", nome: "", nomeFantasia: "", estado: "",
          rua: "", bairro: "", cep: "", numero: "", chefia: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar empresa:", err));
  };
  
  const deletarEmpresa = (cnpj) => {
    axios.delete(`http://localhost:8080/empresas/${cnpj}`)
      .then(() => setEmpresas(empresas.filter(emp => emp.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar empresa:", err));
  };

  const handleSubmitFuncionario = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/funcionarios", novoFuncionario)
      .then(res => {
        setFuncionarios([...funcionarios, res.data]);
        setNovoFuncionario({
          cpf: "", nome: "", cargo: "", telefone: "", email: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar funcionário:", err));
  };

  const deletarFuncionario = (cpf) => {
    axios.delete(`http://localhost:8080/funcionarios/${cpf}`)
      .then(() => setFuncionarios(funcionarios.filter(f => f.cpf !== cpf)))
      .catch(err => console.error("Erro ao deletar funcionário:", err));
  };

  const handleChangeIndustrial = (e) => {
    setNovoIndustrial({ ...novoIndustrial, [e.target.name]: e.target.value });
  };
  
  const handleSubmitIndustrial = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/industriais", novoIndustrial)
      .then(res => {
        setIndustriais([...industriais, res.data]);
        setNovoIndustrial({
          cnpj: "", telefone: "", estado: "", bairro: "",
          cep: "", rua: "", numero: "", nomeEmpresa: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar industrial:", err));
  };
  
  const deletarIndustrial = (cnpj) => {
    axios.delete(`http://localhost:8080/industriais/${cnpj}`)
      .then(() => setIndustriais(industriais.filter(i => i.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar industrial:", err));
  };

  const handleSubmitManutencao = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/manutencoes", novaManutencao)
      .then(res => {
        setManutencoes([...manutencoes, res.data]);
        setNovaManutencao({
          numeroregistro: "",
          data: "",
          historico: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar manutenção:", err));
  };

  const deletarManutencao = (numeroregistro) => {
    axios.delete(`http://localhost:8080/manutencoes/${numeroregistro}`)
      .then(() => setManutencoes(manutencoes.filter(m => m.numeroregistro !== numeroregistro)))
      .catch(err => console.error("Erro ao deletar manutenção:", err));
  };

  const handleChangeRequisicao = (e) => {
    setNovaRequisicao({ ...novaRequisicao, [e.target.name]: e.target.value });
  };
  
  const handleSubmitRequisicao = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/requisicoes", novaRequisicao)
      .then(res => {
        setRequisicoes([...requisicoes, res.data]);
        setNovaRequisicao({ idFuncionario: "", idCliente: "", data: "" });
      })
      .catch(err => console.error("Erro ao cadastrar requisição:", err));
  };

  const deletarRequisicao = (id) => {
    axios.delete(`http://localhost:8080/requisicoes/${id}`)
      .then(() => setRequisicoes(requisicoes.filter(r => r.id !== id)))
      .catch(err => console.error("Erro ao deletar requisição:", err));
  };

  return (
    <div>
      
      <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
    
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
         novoComercial = {novoComercial}
         handleChangeComercial = {handleChangeComercial}
         handleSubmitComercial = {handleSubmitComercial}
         comerciais = {comerciais}
         deletarComercial = {deletarComercial}
        />

        <CadastroEmpresa
          novaEmpresa = {novaEmpresa}
          handleChangeEmpresa = {handleChangeEmpresa}
          handleSubmitEmpresa = {handleSubmitEmpresa}
          empresas = {empresas}
          deletarEmpresa = {deletarEmpresa}
        />
        
      </div>

      {/* Restante dos formulários em coluna */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
       
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

      {/* Estilo global para as caixas de formulário */}
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
  );
}

export default App;
