import AdminSidebar from "../../components/AdminSidebar";

function GerenciarComentariosPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Comentários</h2>

        <div className="comentario">
          <p>
            <b>Maria:</b> Muito bom!
          </p>

          <button style={{ background: "green", color: "white" }}>
            Aprovar
          </button>

          <button style={{ background: "red", color: "white" }}>
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}

export default GerenciarComentariosPage;
