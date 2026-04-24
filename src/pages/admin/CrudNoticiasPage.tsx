import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function CrudNoticiasPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Notícias</h2>

        <table>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td>Notícia Teste</td>
            <td>João</td>
            <td>Publicado</td>
            <td>
              <button onClick={() => navigate("/admin/noticias/1/editar")}>
                Editar
              </button>
              <button>Excluir</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CrudNoticiasPage;
