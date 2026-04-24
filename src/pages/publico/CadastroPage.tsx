import Navbar from "../../components/Navbar";
import { useState } from "react";
import "./CadastroPage.css";

function CadastroPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    uf: "",
    cidade: "",
    bio: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function cadastrar() {
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.push(form);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Conta criada com sucesso!");
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Criar Conta</h2>

          <input
            name="nome"
            placeholder="Nome Completo"
            onChange={handleChange}
          />

          <input name="email" placeholder="E-mail" onChange={handleChange} />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            onChange={handleChange}
          />

          <select name="uf" onChange={handleChange}>
            <option value="">Selecione UF</option>
            <option value="GO">GO</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            <option value="BA">BA</option>
            <option value="RS">RS</option>
            <option value="PR">PR</option>
            <option value="SC">SC</option>
            <option value="PE">PE</option>
            <option value="CE">CE</option>
            <option value="PA">PA</option>
            <option value="AM">AM</option>
            <option value="MA">MA</option>
            <option value="PI">PI</option>
            <option value="RN">RN</option>
            <option value="AL">AL</option>
            <option value="SE">SE</option>
            <option value="DF">DF</option>
            <option value="TO">TO</option>
            <option value="AC">AC</option>
            <option value="AP">AP</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="OUTRO">Outro</option>
          </select>

          <select name="cidade" onChange={handleChange}>
            <option value="">Selecione Cidade</option>
            <option value="Goiânia">Goiânia</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Belo Horizonte">Belo Horizonte</option>
            <option value="Salvador">Salvador</option>
            <option value="Porto Alegre">Porto Alegre</option>
            <option value="Curitiba">Curitiba</option>
            <option value="Florianópolis">Florianópolis</option>
            <option value="Recife">Recife</option>
            <option value="Fortaleza">Fortaleza</option>
            <option value="Belém">Belém</option>
            <option value="Manaus">Manaus</option>
            <option value="São Luís">São Luís</option>
            <option value="Teresina">Teresina</option>
            <option value="Natal">Natal</option>
            <option value="Maceió">Maceió</option>
            <option value="Aracaju">Aracaju</option>
            <option value="Brasília">Brasília</option>
            <option value="Palmas">Palmas</option>
            <option value="Rio Branco">Rio Branco</option>
            <option value="Macapá">Macapá</option>
            <option value="Porto Velho">Porto Velho</option>
            <option value="Boa Vista">Boa Vista</option>
            <option value="Outra">Outra</option>
          </select>

          <textarea
            name="bio"
            placeholder="Bio (opcional)"
            onChange={handleChange}
          />

          <button onClick={cadastrar}>Criar Conta</button>

          <p>
            Já tem conta? <a href="/login">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CadastroPage;
