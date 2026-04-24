import Navbar from "../../components/Navbar";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./ComentarAutorPage.css";

function ComentarAutorPage() {
  const { noticiaId } = useParams();

  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const MAX = 500;

  function handleEnviar() {
    if (!comentario.trim()) {
      alert("Digite um comentário!");
      return;
    }

    // Simulação de salvar
    const comentarios = JSON.parse(localStorage.getItem("comentarios") || "[]");

    comentarios.push({
      texto: comentario,
      noticiaId,
      data: new Date().toLocaleDateString(),
    });

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    setEnviado(true);
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          {/* RESUMO DA NOTÍCIA */}
          <div className="resumo">
            <img src="https://via.placeholder.com/100x70" />
            <div>
              <h4>Título da Notícia {noticiaId}</h4>
              <p>Autor: João Silva</p>
            </div>
          </div>

          {/* FORM */}
          {!enviado ? (
            <>
              <textarea
                placeholder="Escreva seu comentário..."
                maxLength={MAX}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />

              <div className="contador">
                {comentario.length}/{MAX}
              </div>

              <button onClick={handleEnviar}>Enviar Comentário</button>
            </>
          ) : (
            <div className="sucesso">
              <p>Comentário enviado com sucesso!</p>

              <Link to={`/noticia/${noticiaId}`}>Voltar para a Notícia</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComentarAutorPage;
