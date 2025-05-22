import { useState, useEffect } from 'react';
import axios from 'axios';

export function useRequisicoes() {
  const [requisicoes, setRequisicoes] = useState([]);
  const [novaRequisicao, setNovaRequisicao] = useState({
    idFuncionario: "",
    idCliente: "",
    data: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/requisicoes")
      .then(res => setRequisicoes(res.data))
      .catch(err => console.error("Erro ao carregar requisições:", err));
  }, []);

  const handleChange = (e) => {
    setNovaRequisicao({ ...novaRequisicao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/requisicoes", novaRequisicao)
      .then(res => {
        setRequisicoes([...requisicoes, res.data]);
        setNovaRequisicao({
              idFuncionario: "",
              idCliente: "",
              data: ""
        });
      })
      .catch(err => console.error("Erro ao cadastrar requisição:", err));
  };

    const deletar = (manutencaoId, empresaCnpj) => {
        axios.delete(`http://localhost:8080/requisicoes/${manutencaoId}/${empresaCnpj}`)
            .then(() => setRequisicoes(requisicoes.filter(r =>
                !(r.manutencao.numeroRegistro === manutencaoId && r.empresa.cnpj === empresaCnpj)
            )))
            .catch(err => console.error("Erro ao deletar requisição:", err));
    };


  return { requisicoes, novaRequisicao, handleChange, handleSubmit, deletar };
}
