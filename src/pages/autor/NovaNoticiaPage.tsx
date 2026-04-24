import { useState } from "react";
import "./FormNoticia.css";

function NovaNoticiaPage() {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <div className="form-container">
      <div className="form">
        <input
          placeholder="Título"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input placeholder="Subtítulo" />

        <input
          placeholder="URL da imagem"
          onChange={(e) => setImagem(e.target.value)}
        />

        {imagem && <img src={imagem} className="preview" />}

        <textarea placeholder="Conteúdo" rows={10}></textarea>

        <button>Salvar como Rascunho</button>
        <button>Enviar para Revisão</button>
      </div>

      {/* PREVIEW */}
      <div className="preview-card">
        <img src={imagem || "https://via.placeholder.com/300"} />
        <h3>{titulo || "Título da notícia"}</h3>
      </div>
    </div>
  );
}

export default NovaNoticiaPage;
