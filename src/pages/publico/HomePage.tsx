import Navbar from "../../components/Navbar";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Últimas Notícias</h1>
        <p>Fique por dentro de tudo que acontece</p>
        <button>Ler mais</button>
      </section>

      {/* LISTA DE NOTÍCIAS */}
      <section className="noticias">
        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Nova tecnologia revolucionária</h3>
          <p>Descubra como isso vai mudar o mundo...</p>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Esportes em alta</h3>
          <p>Veja os resultados da semana...</p>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/300x180" />
          <h3>Política hoje</h3>
          <p>Entenda o cenário atual...</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
