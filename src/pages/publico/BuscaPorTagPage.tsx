import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

function BuscaPorTagPage() {
  const { slug } = useParams();

  return (
    <div>
      <Navbar />

      <h2 style={{ padding: "20px" }}>Tag: {slug}</h2>

      <div className="noticias">
        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Notícia sobre {slug}</h3>
        </div>
      </div>
    </div>
  );
}

export default BuscaPorTagPage;
