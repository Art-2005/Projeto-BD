import { useNavigate } from 'react-router-dom';

export function HomePage () {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate('/cadastro');
    };

    return(
        <div>
            <button onClick={handleClick}>
                    Cadastrar
                </button>
        </div>

    )
}