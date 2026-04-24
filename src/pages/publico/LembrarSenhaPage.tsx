import Navbar from "../../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LembrarSenhaPage.css";

function LembrarSenhaPage() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleEnviar() {
    if (!email) {
      alert("Digite um e-mail!");
      return;
    }

    // Simulação de envio
    setEnviado(true);
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Recuperar Senha</h2>

          <p>Digite seu e-mail para redefinir sua senha.</p>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleEnviar}>Enviar</button>

          {enviado && <p className="sucesso">E-mail enviado com sucesso!</p>}

          <Link to="/login">Voltar para Login</Link>
        </div>
      </div>
    </div>
  );
}

export default LembrarSenhaPage;
