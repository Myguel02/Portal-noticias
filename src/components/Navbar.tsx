import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <h2 className="logo">Portal Notícias</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Navbar;
