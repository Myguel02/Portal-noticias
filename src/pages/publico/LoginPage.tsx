import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Login</h2>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <div className="lembrar">
            <input type="checkbox" />
            <label>Lembrar-me</label>
          </div>

          <button className="btn">Entrar</button>

          <a href="/lembrar-senha">Esqueci minha senha</a>
          <a href="/cadastro">Não tem conta? Cadastre-se</a>

          {/* ACESSO RÁPIDO */}
          <div className="acesso-rapido">
            <h3>Acesso Rápido (Dev)</h3>

            <div className="botoes">
              <button onClick={() => navigate("/leitor/perfil")}>LEITOR</button>

              <button onClick={() => navigate("/autor/noticias")}>AUTOR</button>

              <button onClick={() => navigate("/editor/painel")}>EDITOR</button>

              <button onClick={() => navigate("/admin/dashboard")}>
                SUPERADMIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
