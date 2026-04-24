import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="admin-sidebar">
      <h2>ADMIN</h2>

      <ul>
        <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/admin/ufs")}>UFs</li>
        <li onClick={() => navigate("/admin/cidades")}>Cidades</li>
        <li onClick={() => navigate("/admin/tags")}>Tags</li>
        <li onClick={() => navigate("/admin/perfis")}>Perfis</li>
        <li onClick={() => navigate("/admin/noticias")}>Notícias</li>
        <li onClick={() => navigate("/admin/usuarios")}>Usuários</li>
        <li onClick={() => navigate("/admin/comentarios")}>Comentários</li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
