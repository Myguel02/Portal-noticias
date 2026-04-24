import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function FormUFPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>{id ? "Editar UF" : "Nova UF"}</h2>

        <input placeholder="Sigla" />
        <input placeholder="Nome" />

        <button>Salvar</button>
        <button onClick={() => navigate("/admin/ufs")}>Cancelar</button>
      </div>
    </div>
  );
}

export default FormUFPage;
