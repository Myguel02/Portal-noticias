import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function CrudUFPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Unidades Federativas</h2>

        <button onClick={() => navigate("/admin/ufs/nova")}>+ Nova UF</button>

        <table>
          <tr>
            <th>ID</th>
            <th>Sigla</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td>1</td>
            <td>SP</td>
            <td>São Paulo</td>
            <td>
              <button onClick={() => navigate("/admin/ufs/1/editar")}>
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

export default CrudUFPage;
