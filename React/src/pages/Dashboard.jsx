    // src/pages/Dashboard.jsx
    import React from "react";
    import './Dashboard.css';

    function Dashboard() {
        // Dados simulados
        const stats = [
            { title: "Total de Usuários", value: "1,245", icon: "👥", trend: "+12%" },
            { title: "Vendas Mensais", value: "R$ 8,540", icon: "💰", trend: "+5.2%" },
            { title: "Novos Pedidos", value: "48", icon: "🛒", trend: "-3%" },
            { title: "Taxa de Conversão", value: "3.6%", icon: "📊", trend: "+0.8%" }
        ];

        const recentOrders = [
            { id: 1, customer: "João Silva", product: "Notebook", status: "Entregue" },
            { id: 2, customer: "Maria Souza", product: "Smartphone", status: "Processando" },
            { id: 3, customer: "Carlos Lima", product: "Tablet", status: "Enviado" },
            { id: 4, customer: "Ana Costa", product: "Fones de Ouvido", status: "Cancelado" }
        ];

        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                {/* Cards de Estatísticas */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-info">
                                <h3>{stat.title}</h3>
                                <p className="stat-value">{stat.value}</p>
                                <p className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                                    {stat.trend}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabela de Pedidos Recentes */}
                <div className="recent-orders">
                    <h2>Pedidos Recentes</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Produto</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentOrders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.product}</td>
                                <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    export default Dashboard;