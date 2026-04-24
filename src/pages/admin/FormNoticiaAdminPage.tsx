import AdminSidebar from "../../components/AdminSidebar";

function FormNoticiaAdminPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        <h2>Editar Notícia</h2>

        <input placeholder="Título" />
        <input placeholder="Subtítulo" />
        <textarea placeholder="Conteúdo" />

        <button>Salvar</button>
      </div>
    </div>
  );
}

export default FormNoticiaAdminPage;
