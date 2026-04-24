import AdminSidebar from "../../components/AdminSidebar";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h1>Dashboard</h1>

        {/* CARDS */}
        <div className="cards">
          <div className="card">Notícias Publicadas: 12</div>
          <div className="card">Rascunhos: 5</div>
          <div className="card">Comentários: 8</div>
          <div className="card">Autores: 3</div>
        </div>

        {/* GRÁFICO SIMPLES */}
        <h3>Notícias por Tag</h3>
        <div className="grafico">
          <div style={{ width: "80%" }}>Tecnologia</div>
          <div style={{ width: "50%" }}>Esporte</div>
          <div style={{ width: "30%" }}>Política</div>
        </div>

        {/* TABELA */}
        <h3>Notícias Pendentes</h3>
        <table>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
          <tr>
            <td>Notícia Teste</td>
            <td>João</td>
            <td>
              <button>Publicar</button>
              <button>Rejeitar</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
