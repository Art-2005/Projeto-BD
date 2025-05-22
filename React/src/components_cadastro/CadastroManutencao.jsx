import React, { useState } from 'react';

function CadastroManutencao() {
    // Estado para nova manutenção
    const [novaManutencao, setNovaManutencao] = useState({
        numeroregistro: '',
        data: '',
        historico: ''
    });

    // Estado para lista de manutenções
    const [manutencoes, setManutencoes] = useState([]);

    // Função para lidar com envio do formulário
    const handleSubmitManutencao = (e) => {
        e.preventDefault();

        // Adiciona nova manutenção à lista
        setManutencoes([...manutencoes, novaManutencao]);

        // Limpa o formulário
        setNovaManutencao({
            numeroregistro: '',
            data: '',
            historico: ''
        });
    };

    // Função para deletar manutenção
    const deletarManutencao = (numeroregistro) => {
        const novasManutencoes = manutencoes.filter(
            (m) => m.numeroregistro !== numeroregistro
        );
        setManutencoes(novasManutencoes);
    };

    return (
        <div className="form-box">
            <h2>Cadastro de Manutenções</h2>
            <form onSubmit={handleSubmitManutencao}>
                <input
                    name="numeroregistro"
                    placeholder="Número de Registro"
                    value={novaManutencao.numeroregistro}
                    onChange={(e) =>
                        setNovaManutencao({
                            ...novaManutencao,
                            numeroregistro: e.target.value
                        })
                    }
                    required
                />
                <br />
                <input
                    type="date"
                    name="data"
                    placeholder="Data"
                    value={novaManutencao.data}
                    onChange={(e) =>
                        setNovaManutencao({
                            ...novaManutencao,
                            data: e.target.value
                        })
                    }
                />
                <br />
                <input
                    name="historico"
                    placeholder="Histórico"
                    value={novaManutencao.historico}
                    onChange={(e) =>
                        setNovaManutencao({
                            ...novaManutencao,
                            historico: e.target.value
                        })
                    }
                />
                <br />
                <br />
                <button type="submit">Cadastrar Manutenção</button>
            </form>

            <h3>Lista de Manutenções</h3>
            <ul className="search-results">
                {manutencoes.map((m) => (
                    <li key={m.numeroregistro}>
                        {m.numeroregistro} - {m.data} - {m.historico}
                        <button
                            onClick={() => deletarManutencao(m.numeroregistro)}
                            style={{ marginLeft: '10px' }}
                        >
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CadastroManutencao