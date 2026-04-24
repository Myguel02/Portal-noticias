import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function FormUsuarioPage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Editar Usuário</h2>

        <input placeholder="Nome" />
        <input placeholder="Email" disabled />

        <select>
          <option>Perfil</option>
          <option>Autor</option>
          <option>Editor</option>
        </select>

        <button>Salvar</button>
        <button onClick={() => navigate("/admin/usuarios")}>Cancelar</button>
      </div>
    </div>
  );
}

export default FormUsuarioPage;
