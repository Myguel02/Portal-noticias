import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function CrudTagsPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Tags</h2>

        <button onClick={() => navigate("/admin/tags/nova")}>+ Nova Tag</button>

        <table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Slug</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td>1</td>
            <td>
              <span className="tag">Tecnologia</span>
            </td>
            <td>tecnologia</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CrudTagsPage;
