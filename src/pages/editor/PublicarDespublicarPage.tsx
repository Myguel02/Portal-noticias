import { useParams, useNavigate } from "react-router-dom";

function PublicarDespublicarPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Publicar Notícia {id}</h2>

      <button onClick={() => alert("Publicado!")}>Publicar</button>

      <button onClick={() => alert("Despublicado!")}>Despublicar</button>

      <button onClick={() => navigate("/editor/painel")}>Voltar</button>
    </div>
  );
}

export default PublicarDespublicarPage;
