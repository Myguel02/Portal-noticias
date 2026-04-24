import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

function BuscaPorUFPage() {
  const { sigla } = useParams();

  return (
    <div>
      <Navbar />

      {/* Breadcrumb */}
      <p style={{ padding: "10px" }}>
        Home {" > "} Busca por UF {" > "} <strong>{sigla}</strong>
      </p>

      <h2 style={{ padding: "10px" }}>Notícias da UF: {sigla}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Notícia em {sigla}</h3>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Outra notícia em {sigla}</h3>
        </div>
      </div>
    </div>
  );
}

export default BuscaPorUFPage;
