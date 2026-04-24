import { BrowserRouter, Routes, Route } from "react-router-dom";

// Público
import HomePage from "./pages/publico/HomePage";
import LoginPage from "./pages/publico/LoginPage";
import CadastroPage from "./pages/publico/CadastroPage";
import BuscaPorUFPage from "./pages/publico/BuscaPorUFPage";
import BuscaPorTagPage from "./pages/publico/BuscaPorTagPage";
import DetalheNoticiaPage from "./pages/publico/DetalheNoticiaPage";

// Leitor
import PerfilLeitorPage from "./pages/leitor/PerfilLeitorPage";
import ComentarLeitorPage from "./pages/leitor/ComentarLeitorPage";

// Autor
import PerfilAutorPage from "./pages/autor/PerfilAutorPage";
import MinhasNoticiasPage from "./pages/autor/MinhasNoticiasPage";
import NovaNoticiaPage from "./pages/autor/NovaNoticiaPage";
import EditarNoticiaPage from "./pages/autor/EditarNoticiaPage";
import ComentarAutorPage from "./pages/autor/ComentarAutorPage";

// Editor
import PainelEditorPage from "./pages/editor/PainelEditorPage";
import PerfilEditorPage from "./pages/editor/PerfilEditorPage";
import PublicarDespublicarPage from "./pages/editor/PublicarDespublicarPage";
import EditarQualquerNoticiaPage from "./pages/editor/EditarQualquerNoticiaPage";

//admin
import DashboardPage from "./pages/admin/DashboardPage";
import CrudUFPage from "./pages/admin/CrudUFPage";
import FormUFPage from "./pages/admin/FormUFPage";
import CrudTagsPage from "./pages/admin/CrudTagsPage";
import FormTagPage from "./pages/admin/FormTagPage";
import GerenciarComentariosPage from "./pages/admin/GerenciarComentariosPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PÚBLICO */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/busca/uf/:sigla" element={<BuscaPorUFPage />} />
        <Route path="/busca/tag/:slug" element={<BuscaPorTagPage />} />
        <Route path="/noticia/:id" element={<DetalheNoticiaPage />} />

        {/* LEITOR */}
        <Route path="/leitor/perfil" element={<PerfilLeitorPage />} />
        <Route
          path="/noticia/:noticiaId/comentar"
          element={<ComentarLeitorPage />}
        />

        {/* AUTOR */}
        <Route path="/autor/perfil" element={<PerfilAutorPage />} />
        <Route path="/autor/noticias" element={<MinhasNoticiasPage />} />
        <Route path="/autor/noticias/nova" element={<NovaNoticiaPage />} />
        <Route
          path="/autor/noticias/:id/editar"
          element={<EditarNoticiaPage />}
        />
        <Route
          path="/autor/comentar/:noticiaId"
          element={<ComentarAutorPage />}
        />

        {/* EDITOR */}
        <Route path="/editor/painel" element={<PainelEditorPage />} />
        <Route path="/editor/perfil" element={<PerfilEditorPage />} />
        <Route
          path="/editor/publicar/:id"
          element={<PublicarDespublicarPage />}
        />
        <Route
          path="/editor/noticias/:id/editar"
          element={<EditarQualquerNoticiaPage />}
        />

        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/ufs" element={<CrudUFPage />} />
        <Route path="/admin/ufs/nova" element={<FormUFPage />} />
        <Route path="/admin/ufs/:id/editar" element={<FormUFPage />} />
        <Route path="/admin/tags" element={<CrudTagsPage />} />
        <Route path="/admin/tags/nova" element={<FormTagPage />} />
        <Route path="/admin/tags/:id/editar" element={<FormTagPage />} />
        <Route
          path="/admin/comentarios"
          element={<GerenciarComentariosPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
