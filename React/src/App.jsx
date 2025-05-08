import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [balcoes, setBalcoes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);

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

  const [comerciais, setComerciais] = useState([]);
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

const [empresas, setEmpresas] = useState([]);

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

const [novoFuncionario, setNovoFuncionario] = useState({
  cpf: "", nome: "", cargo: "", telefone: "", email: ""
});

const [industriais, setIndustriais] = useState([]);

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

 const [manutencoes, setManutencoes] = useState([]);

const [novaManutencao, setNovaManutencao] = useState({
  numeroregistro: "",
  data: "",
  historico: ""
 });

 const [requisicoes, setRequisicoes] = useState([]);
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
    
        <div className="form-box">
          <h2>Cadastro de Balcões</h2>
          <form onSubmit={handleSubmitBalcao}>
            <input name="cnpj" placeholder="CNPJ" value={novoBalcao.cnpj} onChange={handleChangeBalcao} required /><br />
            <input name="telefone" placeholder="Telefone" value={novoBalcao.telefone} onChange={handleChangeBalcao} /><br />
            <input name="estado" placeholder="Estado" value={novoBalcao.estado} onChange={handleChangeBalcao} /><br />
            <input name="bairro" placeholder="Bairro" value={novoBalcao.bairro} onChange={handleChangeBalcao} /><br />
            <input name="cep" placeholder="CEP" value={novoBalcao.cep} onChange={handleChangeBalcao} /><br />
            <input name="rua" placeholder="Rua" value={novoBalcao.rua} onChange={handleChangeBalcao} /><br />
            <input name="numero" placeholder="Número" value={novoBalcao.numero} onChange={handleChangeBalcao} /><br />
            <br />
            <button type="submit">Cadastrar Balcão</button>
          </form>

          <h3>Lista de Balcões</h3>
        <ul>
          {balcoes.map((b) => (
            <li key={b.cnpj}>
              {b.cnpj} - {b.bairro}, {b.rua}, {b.numero}
              <button onClick={() => deletarBalcao(b.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
        </ul>
        </div>

        <div className="form-box">
          <h2>Cadastro de Clientes</h2>
          <form onSubmit={handleSubmitCliente}>
            <input name="numerocadastro" placeholder="Número de Cadastro" value={novoCliente.numerocadastro} onChange={handleChangeCliente} required /><br />
            <input name="nome" placeholder="Nome" value={novoCliente.nome} onChange={handleChangeCliente} required /><br />
            <input name="telefone" placeholder="Telefone" value={novoCliente.telefone} onChange={handleChangeCliente} /><br />
            <input name="email" placeholder="Email" value={novoCliente.email} onChange={handleChangeCliente} /><br />
            <input name="historico" placeholder="Histórico" value={novoCliente.historico} onChange={handleChangeCliente} /><br />
            <input name="servicos" placeholder="Serviços" value={novoCliente.servicos} onChange={handleChangeCliente} /><br />
            <br />
            <button type="submit">Cadastrar Cliente</button>
          </form>

          <h3>Lista de Clientes</h3>
        <ul>
          {clientes.map((c) => (
            <li key={c.numerocadastro}>
              {c.numerocadastro} - {c.nome} ({c.email})
              <button onClick={() => deletarCliente(c.numerocadastro)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
        </ul>
        </div>

        <div className="form-box">
          <h2>Cadastro de Comerciais</h2>
          <form onSubmit={handleSubmitComercial}>
            <input name="cnpj" placeholder="CNPJ" value={novoComercial.cnpj} onChange={handleChangeComercial} required /><br />
            <input name="nomeEmpresa" placeholder="Nome da Empresa" value={novoComercial.nomeEmpresa} onChange={handleChangeComercial} required /><br />
            <input name="telefone" placeholder="Telefone" value={novoComercial.telefone} onChange={handleChangeComercial} /><br />
            <input name="estado" placeholder="Estado" value={novoComercial.estado} onChange={handleChangeComercial} /><br />
            <input name="bairro" placeholder="Bairro" value={novoComercial.bairro} onChange={handleChangeComercial} /><br />
            <input name="cep" placeholder="CEP" value={novoComercial.cep} onChange={handleChangeComercial} /><br />
            <input name="rua" placeholder="Rua" value={novoComercial.rua} onChange={handleChangeComercial} /><br />
            <input name="numero" placeholder="Número" value={novoComercial.numero} onChange={handleChangeComercial} /><br />
            <br />
            <button type="submit">Cadastrar Comercial</button>
          </form>
          
          <h3>Lista de Comerciais</h3>
          <ul>
            {comerciais.map((c) => (
              <li key={c.cnpj}>
                {c.nomeEmpresa} - {c.bairro}, {c.rua}, {c.numero}
                <button onClick={() => deletarComercial(c.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>

         <div className="form-box">
          <h2>Cadastro de Empresas</h2>
          <form onSubmit={handleSubmitEmpresa}>
            <input name="cnpj" placeholder="CNPJ" value={novaEmpresa.cnpj} onChange={handleChangeEmpresa} required /><br />
            <input name="nome" placeholder="Nome" value={novaEmpresa.nome} onChange={handleChangeEmpresa} required /><br />
            <input name="nomeFantasia" placeholder="Nome Fantasia" value={novaEmpresa.nomeFantasia} onChange={handleChangeEmpresa} /><br />
            <input name="estado" placeholder="Estado" value={novaEmpresa.estado} onChange={handleChangeEmpresa} /><br />
            <input name="rua" placeholder="Rua" value={novaEmpresa.rua} onChange={handleChangeEmpresa} /><br />
            <input name="bairro" placeholder="Bairro" value={novaEmpresa.bairro} onChange={handleChangeEmpresa} /><br />
            <input name="cep" placeholder="CEP" value={novaEmpresa.cep} onChange={handleChangeEmpresa} /><br />
            <input name="numero" placeholder="Número" value={novaEmpresa.numero} onChange={handleChangeEmpresa} /><br />
            <input name="chefia" placeholder="Chefia" value={novaEmpresa.chefia} onChange={handleChangeEmpresa} /><br />
            <br />
            <button type="submit">Cadastrar Empresa</button>
          </form>

          <h3>Lista de Empresas</h3>
          <ul>
          {empresas.map((e) => (
            <li key={e.cnpj}>
              {e.cnpj} - {e.nome} ({e.nomeFantasia})
              <button onClick={() => deletarEmpresa(e.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
        </ul>
        </div>
      </div>

      {/* Restante dos formulários em coluna */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
       
        <div className="form-box">
          <h2>Cadastro de Funcionários</h2>
          <form onSubmit={handleSubmitFuncionario}>
            <input name="cpf" placeholder="CPF" value={novoFuncionario.cpf} onChange={handleChangeFuncionario} required /><br />
            <input name="nome" placeholder="Nome" value={novoFuncionario.nome} onChange={handleChangeFuncionario} required /><br />
            <input name="cargo" placeholder="Cargo" value={novoFuncionario.cargo} onChange={handleChangeFuncionario} /><br />
            <input name="telefone" placeholder="Telefone" value={novoFuncionario.telefone} onChange={handleChangeFuncionario} /><br />
            <input name="email" placeholder="Email" value={novoFuncionario.email} onChange={handleChangeFuncionario} /><br /><br />
            <button type="submit">Cadastrar Funcionário</button>
          </form>

          <h3>Lista de Funcionários</h3>
          <ul>
            {funcionarios.map((f) => (
              <li key={f.cpf}>
                {f.cpf} - {f.nome} ({f.cargo})
                <button onClick={() => deletarFuncionario(f.cpf)} style={{ marginLeft: '10px' }}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>

              <div className="form-box">
        <h2>Cadastro de Industriais</h2>
        <form onSubmit={handleSubmitIndustrial}>
          <input name="cnpj" placeholder="CNPJ" value={novoIndustrial.cnpj} onChange={handleChangeIndustrial} required /><br />
          <input name="nomeEmpresa" placeholder="Nome da Empresa" value={novoIndustrial.nomeEmpresa} onChange={handleChangeIndustrial} /><br />
          <input name="telefone" placeholder="Telefone" value={novoIndustrial.telefone} onChange={handleChangeIndustrial} /><br />
          <input name="estado" placeholder="Estado" value={novoIndustrial.estado} onChange={handleChangeIndustrial} /><br />
          <input name="bairro" placeholder="Bairro" value={novoIndustrial.bairro} onChange={handleChangeIndustrial} /><br />
          <input name="cep" placeholder="CEP" value={novoIndustrial.cep} onChange={handleChangeIndustrial} /><br />
          <input name="rua" placeholder="Rua" value={novoIndustrial.rua} onChange={handleChangeIndustrial} /><br />
          <input name="numero" placeholder="Número" value={novoIndustrial.numero} onChange={handleChangeIndustrial} /><br /><br />
          <button type="submit">Cadastrar Industrial</button>
        </form>

        <h3>Lista de Industriais</h3>
        <ul>
          {industriais.map((i) => (
            <li key={i.cnpj}>
              {i.nomeEmpresa} - {i.bairro}, {i.rua}, {i.numero}
              <button onClick={() => deletarIndustrial(i.cnpj)} style={{ marginLeft: '10px' }}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>

            <div className="form-box">
        <h2>Cadastro de Manutenções</h2>
        <form onSubmit={handleSubmitManutencao}>
          <input
            name="numeroregistro"
            placeholder="Número de Registro"
            value={novaManutencao.numeroregistro}
            onChange={(e) => setNovaManutencao({ ...novaManutencao, numeroregistro: e.target.value })}
            required
          /><br />
          <input
            type="date"
            name="data"
            placeholder="Data"
            value={novaManutencao.data}
            onChange={(e) => setNovaManutencao({ ...novaManutencao, data: e.target.value })}
          /><br />
          <input
            name="historico"
            placeholder="Histórico"
            value={novaManutencao.historico}
            onChange={(e) => setNovaManutencao({ ...novaManutencao, historico: e.target.value })}
          /><br /><br />
          <button type="submit">Cadastrar Manutenção</button>
        </form>

        <h3>Lista de Manutenções</h3>
        <ul>
          {manutencoes.map((m) => (
            <li key={m.numeroregistro}>
              {m.numeroregistro} - {m.data} - {m.historico}
              <button onClick={() => deletarManutencao(m.numeroregistro)} style={{ marginLeft: '10px' }}>
                Deletar
              </button>
            </li>
          ))}
        </ul>
      </div>

              <div className="form-box">
          <h2>Cadastro de Requisição</h2>
          <form onSubmit={handleSubmitRequisicao}>
            <input name="idFuncionario" placeholder="ID Funcionário" value={novaRequisicao.idFuncionario} onChange={handleChangeRequisicao} required /><br />
            <input name="idCliente" placeholder="ID Cliente" value={novaRequisicao.idCliente} onChange={handleChangeRequisicao} required /><br />
            <input name="data" placeholder="Data" type="date" value={novaRequisicao.data} onChange={handleChangeRequisicao} required /><br /><br />
            <button type="submit">Cadastrar Requisição</button>
          </form>

          <h3>Lista de Requisições</h3>
          <ul>
            {requisicoes.map((r) => (
              <li key={r.id}>
                {r.id} - Funcionário: {r.idFuncionario}, Cliente: {r.idCliente}, Data: {r.data}
                <button onClick={() => deletarRequisicao(r.id)} style={{ marginLeft: '10px' }}>Deletar</button>
              </li>
            ))}
          </ul>
        </div>

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
