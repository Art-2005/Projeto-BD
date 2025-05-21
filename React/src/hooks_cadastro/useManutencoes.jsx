import { useState, useEffect } from 'react';
import axios from 'axios';

export function useManutencoes() {
  const [manutencoes, setManutencoes] = useState([]);
  const [novaManutencao, setNovaManutencao] = useState({
        numeroregistro: "",
        data: "",
        historico: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/manutencoes")
      .then(res => setManutencoes(res.data))
      .catch(err => console.error("Erro ao carregar manutenções:", err));
  }, []);

  const handleChange = (e) => {
    setNovaManutencao({ ...novaManutencao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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

  const deletar = (numeroregistro) => {
    axios.delete(`http://localhost:8080/manutencoes/${numeroregistro}`)
      .then(() => setManutencoes(manutencoes.filter(m => m.numeroregistro !== numeroregistro)))
      .catch(err => console.error("Erro ao deletar manutenção:", err));
  };

  return { manutencoes, novaManutencao, handleChange, handleSubmit, deletar };
}
