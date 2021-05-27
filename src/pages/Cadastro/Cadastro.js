import React, { useState } from "react";
import "./Cadastro.css";
import api from "../../services/api";
import Footer from "../../Componentes/footer/index";
import Header from "../../Componentes/header/index";
import { useHistory } from "react-router";

function Cadastro() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [frase, setFrase] = useState();
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  const [estado, setEstado] = useState();
  const [pais, setPais] = useState();
  const [cidade, setCidade] = useState();

  {
    /* Caracteres que são aceitos no input type="number" */
  }
  const [symbolsArr] = useState(["e", "E", "+", "-", ".", ","]);

  const history = useHistory();

  async function cadastro() {
    try {
      const body = { username, email, senha, frase };
      const response_usuario = await api.post("/usuario", body);
      console.log(response_usuario);
      const user_id = response_usuario.data.user_id;
      const response_endereco = await api.post(`/endereco/${user_id}`, {
        rua,
        numero,
        cidade,
        estado,
        pais,
      });
      history.push("/login");
    } catch (error) {
      console.warn(error);
      alert(error.message);
    }
  }

  return (
    <div className="paginaCadastro">
      <div>
        <Header />
      </div>

      <div className="cadastro">
        {/* Botões e inputs*/}
        <div className="botoes_inputs">
          <div className="apelidoRuaNumero">
            <div>
              <p>Apelido</p>
              <p className="fraseCadastro">Frase que te define</p>
            </div>
            <div>
              <input
                name="apelido"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input name="frase" onChange={(e) => setFrase(e.target.value)} />
            </div>
          </div>

          <div className="apelidoRuaNumero">
            <div>
              <p>Rua</p>
              <p className="textNumeroUF">Número</p>
            </div>
            <div>
              <input
                className="inputRuaCidade"
                name="rua"
                onChange={(e) => setRua(e.target.value)}
              />
              <input
                className="inputNumeroUF"
                name="numero"
                onChange={(e) => setNumero(e.target.value)}
                type="number"
                onKeyDown={(e) =>
                  symbolsArr.includes(e.key) && e.preventDefault()
                }
              />
            </div>
          </div>

          <div className="apelidoRuaNumero">
            <div>
              <p>Cidade</p>
              <p className="textNumeroUF">UF</p>
            </div>
            <div>
              <input
                name="cidade"
                className="inputRuaCidade"
                onChange={(e) => setCidade(e.target.value)}
              />
              <input
                className="inputNumeroUF"
                name="uf"
                oonChange={(e) => setEstado(e.target.value)}
              />
            </div>
          </div>

          <div className="inputEmailSenhaPergunta">
            <p>País</p>
            <input name="pais" onChange={(e) => setPais(e.target.value)} />
            <p>E-mail</p>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Senha</p>
            <input
              type="password"
              name="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="botaoCadastrar">
            <div>
              <button type="button" value="text" onClick={cadastro}>
                Cadastrar
              </button>
            </div>

            <div>
              <p>Já está cadastrado?</p>
              <a href={"/login"} className="perguntaLogin">
                <p>Faça o login!</p>
              </a>
            </div>
          </div>
        </div>

        {/* Linha vertical */}
        <div className="linhaCentro">
          <img
            alt="Linha vertical"
            src="https://i.ibb.co/RHz9bry/linha-vertical-removebg-preview.png"
            className="linhas"
          />
        </div>

        {/* Logo */}
        <div className="logoCadastro">
          <img
            alt="Logo do Bookpedia"
            src="https://i.ibb.co/K5sBWhC/oie-nm4q-Dx-Tc-Xe-FN.png"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
