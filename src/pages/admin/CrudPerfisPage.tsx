import AdminSidebar from "../../components/AdminSidebar";

function CrudPerfisPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Perfis</h2>

        <div className="cards">
          <div className="card">Leitor</div>
          <div className="card">Autor</div>
          <div className="card">Editor</div>
          <div className="card">SuperAdmin</div>
        </div>
      </div>
    </div>
  );
}

export default CrudPerfisPage;
