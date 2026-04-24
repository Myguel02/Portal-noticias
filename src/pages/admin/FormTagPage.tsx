import { useState } from "react";

function FormTagPage() {
  const [nome, setNome] = useState("");

  const slug = nome.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <h2>Nova Tag</h2>

      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />

      <p>Slug: {slug}</p>

      <div style={{ background: "#38bdf8", color: "white", padding: "5px" }}>
        {nome || "Preview"}
      </div>

      <button>Salvar</button>
    </div>
  );
}

export default FormTagPage;
