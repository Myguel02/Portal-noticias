import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function FormCidadePage() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Nova Cidade</h2>

        <input placeholder="Nome da Cidade" />

        <select>
          <option>Selecione a UF</option>
          <option>SP</option>
          <option>RJ</option>
        </select>

        <button>Salvar</button>
        <button onClick={() => navigate("/admin/cidades")}>Cancelar</button>
      </div>
    </div>
  );
}

export default FormCidadePage;
