import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function DetalheNoticiaPage() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />

      {/* CAPA */}
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <div style={{ display: "flex", padding: "20px" }}>
        {/* CONTEÚDO */}
        <div style={{ flex: 3 }}>
          <h1>Título da Notícia {id}</h1>
          <h3>Subtítulo da notícia</h3>

          <p>
            Conteúdo da notícia... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor.
          </p>

          <p>Mais conteúdo... isso simula uma notícia real.</p>
        </div>

        {/* SIDEBAR */}
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <h4>Outras notícias</h4>

          <ul>
            <li>Notícia 1</li>
            <li>Notícia 2</li>
            <li>Notícia 3</li>
          </ul>

          <Link to={`/noticia/${id}/comentar`}>Comentar</Link>

          <h4>Tags</h4>
          <span
            style={{
              background: "#38bdf8",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            Tecnologia
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetalheNoticiaPage;
