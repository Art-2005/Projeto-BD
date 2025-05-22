import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/homepage';
import { Cadastro } from './pages/cadastro';
import  Dashboard  from './pages/Dashboard'; // Importe o componente Dashboard

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Nova rota para o Dashboard */}
            </Routes>
        </Router>
    );
}

export default App;

{/* Commitao */}