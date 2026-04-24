import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function CrudCidadesPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Cidades</h2>

        <button onClick={() => navigate("/admin/cidades/nova")}>
          + Nova Cidade
        </button>

        <select>
          <option>Filtrar por UF</option>
          <option>SP</option>
          <option>RJ</option>
        </select>

        <table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>UF</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td>1</td>
            <td>São Paulo</td>
            <td>SP</td>
            <td>
              <button onClick={() => navigate("/admin/cidades/1/editar")}>
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

export default CrudCidadesPage;
