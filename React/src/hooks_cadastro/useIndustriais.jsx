import { useState, useEffect } from 'react';
import axios from 'axios';

export function useIndustriais() {
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

  useEffect(() => {
    axios.get("http://localhost:8080/industriais")
      .then(res => setIndustriais(res.data))
      .catch(err => console.error("Erro ao carregar industriais:", err));
  }, []);

  const handleChange = (e) => {
    setNovoIndustrial({ ...novoIndustrial, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/industriais", novoIndustrial)
      .then(res => {
        setIndustriais([...industriais, res.data]);
        setNovoIndustrial({
          cnpj: "",
          telefone: "",
          estado: "",
          bairro: "",
          cep: "",
          rua: "",
          numero: "",
          nomeEmpresa: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar industrial:", err));
  };

  const deletar = (cnpj) => {
    axios.delete(`http://localhost:8080/industriais/${cnpj}`)
      .then(() => setIndustriais(industriais.filter(i => i.cnpj !== cnpj)))
      .catch(err => console.error("Erro ao deletar industrial:", err));
  };

  return { industriais, novoIndustrial, handleChange, handleSubmit, deletar };
}
