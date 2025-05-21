import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [novoFuncionario, setNovoFuncionario] = useState({
     cpf: "", 
     nome: "", 
     cargo: "", 
     telefone: "", 
     email: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/funcionarios")
      .then(res => setFuncionarios(res.data))
      .catch(err => console.error("Erro ao carregar funcionários:", err));
  }, []);

  const handleChange = (e) => {
    setNovoFuncionario({ ...novoFuncionario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/funcionarios", novoFuncionario)
      .then(res => {
        setFuncionarios([...funcionarios, res.data]);
        setNovoFuncionario({
        cpf: "", 
        nome: "", 
        cargo: "", 
        telefone: "", 
        email: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar funcionário:", err));
  };

  const deletar = (cpf) => {
    axios.delete(`http://localhost:8080/funcionarios/${cpf}`)
      .then(() => setFuncionarios(funcionarios.filter(f => f.cpf !== cpf)))
      .catch(err => console.error("Erro ao deletar funcionário:", err));
  };

  return { funcionarios, novoFuncionario, handleChange, handleSubmit, deletar };
}
