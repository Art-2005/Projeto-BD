import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [balcoes, setBalcoes] = useState([]);
  const [novoBalcao, setNovoBalcao] = useState({
    cnpj: "",
    telefone: "",
    estado: "",
    bairro: "",
    cep: "",
    rua: "",
    numero: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/balcoes")
      .then(res => setBalcoes(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setNovoBalcao({ ...novoBalcao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/balcoes", novoBalcao)
      .then(res => {
        setBalcoes([...balcoes, res.data]);
        setNovoBalcao({ cnpj: "", telefone: "", estado: "", bairro: "", cep: "", rua: "", numero: "" });
      })
      .catch(err => console.error(err));
  };

  const deletarBalcao = (cnpj) => {
    axios.delete(`http://localhost:8080/balcoes/${cnpj}`)
      .then(() => setBalcoes(balcoes.filter(b => b.cnpj !== cnpj)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Cadastro de Balcões</h2>
      <form onSubmit={handleSubmit}>
        <input name="cnpj" placeholder="CNPJ" value={novoBalcao.cnpj} onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone" value={novoBalcao.telefone} onChange={handleChange} />
        <input name="estado" placeholder="Estado" value={novoBalcao.estado} onChange={handleChange} />
        <input name="bairro" placeholder="Bairro" value={novoBalcao.bairro} onChange={handleChange} />
        <input name="cep" placeholder="CEP" value={novoBalcao.cep} onChange={handleChange} />
        <input name="rua" placeholder="Rua" value={novoBalcao.rua} onChange={handleChange} />
        <input name="numero" placeholder="Número" value={novoBalcao.numero} onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Lista de Balcões</h2>
      <ul>
        {balcoes.map((b) => (
          <li key={b.cnpj}>
            {b.cnpj} - {b.bairro}, {b.rua}, {b.numero}
            <button onClick={() => deletarBalcao(b.cnpj)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
