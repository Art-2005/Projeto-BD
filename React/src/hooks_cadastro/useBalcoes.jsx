import { useState, useEffect } from 'react';
import axios from 'axios';

export function useBalcoes() {
  const [balcoes, setBalcoes] = useState([]);
  const [novoBalcao, setNovoBalcao] = useState({
    cnpj: "", telefone: "", estado: "", bairro: "",
    cep: "", rua: "", numero: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/balcoes")
      .then(res => setBalcoes(res.data))
      .catch(err => console.error("Erro ao carregar balcões:", err));
  }, []);

  const handleChange = (e) => {
    setNovoBalcao({ ...novoBalcao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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

  const deletar = (cnpj) => {
    axios.delete(`http://localhost:8080/balcoes/${cnpj}`)
      .then(() => setBalcoes(balcoes.filter(b => b.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar balcão:", err));
  };

  return { balcoes, novoBalcao, handleChange, handleSubmit, deletar };
}
