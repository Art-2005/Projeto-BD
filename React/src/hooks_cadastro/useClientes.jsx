import { useState, useEffect } from 'react';
import axios from 'axios';

export function useClientes() {
  const [clientes, setClientes] = useState([]);
  const [novoCliente, setNovoCliente] = useState({
    numerocadastro: "",
    nome: "",
    telefone: "",
    historico: "",
    servicos: "",
    email: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/clientes")
      .then(res => setClientes(res.data))
      .catch(err => console.error("Erro ao carregar clientes:", err));
  }, []);

  const handleChange = (e) => {
    setNovoCliente({ ...novoCliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/clientes", novoCliente)
      .then(res => {
        setClientes([...clientes, res.data]);
        setNovoCliente({
          numerocadastro: "",
          nome: "",
          telefone: "",
          historico: "",
          servicos: "",
          email: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar cliente:", err));
  };

  const deletar = (numerocadastro) => {
    axios.delete(`http://localhost:8080/clientes/${numerocadastro}`)
      .then(() => setClientes(clientes.filter(c => c.numerocadastro !== numerocadastro)))
      .catch(err => console.error("Erro ao deletar cliente:", err));
  };

  return { clientes, novoCliente, handleChange, handleSubmit, deletar };
}
