import Navbar from "../../components/Navbar";
import "./PerfilLeitorPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function PerfilLeitorPage() {
  const usuarioStorage = JSON.parse(
    localStorage.getItem("usuarioLogado") || "null",
  );

  const [editando, setEditando] = useState(false);
  const [usuario, setUsuario] = useState(usuarioStorage);

  if (!usuario) {
    return <h2 style={{ padding: "20px" }}>Nenhum usuário logado</h2>;
  }

  function handleChange(e: any) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function salvar() {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    setEditando(false);
  }

  function cancelar() {
    setUsuario(usuarioStorage);
    setEditando(false);
  }

  return (
    <div>
      <Navbar />

      <div className="perfil-container">
        <div className="perfil-card">
          {/* AVATAR */}
          <img src="https://via.placeholder.com/120" className="avatar" />

          {/* NOME */}
          {editando ? (
            <input name="nome" value={usuario.nome} onChange={handleChange} />
          ) : (
            <h2>{usuario.nome}</h2>
          )}

          {/* EMAIL */}
          {editando ? (
            <input name="email" value={usuario.email} onChange={handleChange} />
          ) : (
            <p>{usuario.email}</p>
          )}

          {/* UF / CIDADE */}
          {editando ? (
            <>
              <input name="uf" value={usuario.uf} onChange={handleChange} />
              <input
                name="cidade"
                value={usuario.cidade}
                onChange={handleChange}
              />
            </>
          ) : (
            <p>
              {usuario.cidade} / {usuario.uf}
            </p>
          )}

          {/* BIO */}
          {editando ? (
            <textarea name="bio" value={usuario.bio} onChange={handleChange} />
          ) : (
            <p>{usuario.bio}</p>
          )}

          {/* DATA CADASTRO */}
          <p className="data">Cadastro: {usuario.data || "Não informado"}</p>

          {/* BOTÕES */}
          {!editando ? (
            <button onClick={() => setEditando(true)}>Editar Perfil</button>
          ) : (
            <div className="botoes">
              <button onClick={salvar}>Salvar</button>
              <button onClick={cancelar}>Cancelar</button>
            </div>
          )}
        </div>
      </div>

      {/* COMENTÁRIOS */}
      <div className="comentarios">
        <h3>Meus Comentários</h3>

        <div className="comentario">
          <p>"Muito boa essa notícia!"</p>
          <Link to="/noticia/1">Ver notícia</Link>
          <span>01/04/2026</span>
        </div>

        <div className="comentario">
          <p>"Gostei bastante 👍"</p>
          <Link to="/noticia/2">Ver notícia</Link>
          <span>02/04/2026</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Portal de Notícias</p>
      </footer>
    </div>
  );
}

export default PerfilLeitorPage;
