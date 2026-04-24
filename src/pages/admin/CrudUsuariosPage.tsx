import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function CrudUsuariosPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Usuários</h2>

        <table>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td>Maria</td>
            <td>maria@email.com</td>
            <td>Autor</td>
            <td>
              <button onClick={() => navigate("/admin/usuarios/1/editar")}>
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

export default CrudUsuariosPage;
