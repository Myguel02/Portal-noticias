import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./MinhasNoticiasPage.css";

function MinhasNoticiasPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="topo">
        <h2>Minhas Notícias</h2>
        <button onClick={() => navigate("/autor/noticias/nova")}>
          + Nova Notícia
        </button>
      </div>

      <div className="filtros">
        <input placeholder="Buscar..." />
        <select>
          <option>Todas</option>
          <option>Publicadas</option>
          <option>Rascunhos</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Data</th>
            <th>Status</th>
            <th>Views</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Notícia 1</td>
            <td>01/04</td>
            <td>Publicada</td>
            <td>100</td>
            <td>
              <button onClick={() => navigate("/autor/noticias/1/editar")}>
                Editar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MinhasNoticiasPage;
