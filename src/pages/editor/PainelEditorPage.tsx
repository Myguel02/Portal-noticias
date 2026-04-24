import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./PainelEditorPage.css";

function PainelEditorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="editor-container">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Editor</h3>
          <ul>
            <li onClick={() => navigate("/editor/painel")}>Painel</li>
            <li onClick={() => navigate("/editor/perfil")}>Perfil</li>
          </ul>
        </aside>

        {/* CONTEÚDO */}
        <main className="conteudo">
          <h2>Painel do Editor</h2>

          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Notícia Teste</td>
                <td>Pendente</td>
                <td>
                  <button onClick={() => navigate("/noticia/1")}>👁️</button>
                  <button onClick={() => navigate("/editor/noticias/1/editar")}>
                    ✏️
                  </button>
                  <button>🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default PainelEditorPage;
