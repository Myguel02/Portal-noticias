import Navbar from "../../components/Navbar";
import { useState } from "react";
import "./PerfilAutorPage.css";

function PerfilAutorPage() {
  const userStorage = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null",
  );

  const [editando, setEditando] = useState(false);
  const [usuario, setUsuario] = useState(userStorage);

  if (!usuario) return <h2>Sem usuário</h2>;

  function handleChange(e: any) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function salvar() {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    setEditando(false);
  }

  return (
    <div>
      <Navbar />

      <div className="perfil">
        <img src="https://via.placeholder.com/120" />

        {editando ? (
          <input name="nome" value={usuario.nome} onChange={handleChange} />
        ) : (
          <h2>{usuario.nome}</h2>
        )}

        <p>{usuario.email}</p>
        <p>
          {usuario.cidade} / {usuario.uf}
        </p>

        {editando ? (
          <textarea name="bio" value={usuario.bio} onChange={handleChange} />
        ) : (
          <p>{usuario.bio}</p>
        )}

        {!editando ? (
          <button onClick={() => setEditando(true)}>Editar</button>
        ) : (
          <>
            <button onClick={salvar}>Salvar</button>
            <button onClick={() => setEditando(false)}>Cancelar</button>
          </>
        )}
      </div>

      {/* STATS */}
      <div className="stats">
        <div>📄 10 Notícias</div>
        <div>✅ 6 Publicadas</div>
        <div>📝 4 Rascunhos</div>
        <div>👁️ 1200 Views</div>
        <div>💬 30 Comentários</div>
      </div>
    </div>
  );
}

export default PerfilAutorPage;
