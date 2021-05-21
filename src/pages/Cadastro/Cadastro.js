import React, { useState } from 'react';
import './Cadastro.css';
import api from '../../services/api';
import Footer from '../../Componentes/footer/index';
import Header from '../../Componentes/header/index';
import { useHistory } from 'react-router';

function Cadastro() {

  const  [usuario, setUsuario] = useState();
  const  [username, setUsername] = useState();
  const  [email, setEmail] = useState();
  const  [senha, setSenha] = useState();
  const  [frase, setFrase] = useState();
  const  [rua, setRua] = useState();
  const  [numero, setNumero] = useState();
  const  [estado, setEstado] = useState();
  const  [pais, setPais] = useState();
  const  [cidade, setCidade] = useState();
  const [symbolsArr] = useState(["e", "E", "+", "-", ".", ","]);
// {Caracteres que são aceitos no input type="number" }
 

      // const key = e.target.name;
    
      // const newUsuario = {...usuario};
  
      // newUsuario[key] = e.target.value;

      // console.log(newUsuario);


  const history = useHistory();

  async function cadastro(e){
    try {
      const response = await api
      .post('/usuario', (username, email, senha, frase))
      .post('/endereco/:usuario_id', (rua, numero, cidade, estado, pais));

      console.log(response);
  
    } catch (error) {
      console.warn(error);
      alert(error.message)
    }
    
  }
  
  return (
    <div className="paginaCadastro">

      <Header />

      <div className="cadastro">

        {/* Botões e inputs*/}
        <div className="botoes_inputs">
          <div>
            <div className="inputNomeSobrenome">
              <p>Apelido</p>
              <input name="apelido" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="inputNomeSobrenome">
              <p className="espacamentoSobrenome">Qual livro você seria?</p>
              <input className="inputSobrenome" name="frase" onChange={(e) => setFrase(e.target.value)} />
            </div>
          </div>

          <div>
            <div>
              <p>Rua</p>
              <input className="inputRuaCidade" name="rua" onChange={(e) => setRua(e.target.value)} />
            </div>
            <div>
              <p className="espacamentoNumeroUF">Número</p>
              <input className="inputNumeroUF" name="numero" onChange={(e) => setNumero(e.target.value)} type="number" onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} />
            </div>
          </div>

          <div>
            <div>
              <p>Cidade</p>
              <input className="inputRuaCidade" name="cidade" onChange={(e) => setCidade(e.target.value)}/>
            </div>
            <div>
              <p className="espacamentoNumeroUF">UF</p>
              <input className="inputNumeroUF" name="uf" onChange={(e) => setEstado(e.target.value)} />
            </div>
          </div>

          <p>País</p>
          <input className="inputEmailSenhaPergunta" name="pais" onChange={(e) => setPais(e.target.value)} />
          <p>E-mail</p>
          <input type="email" className="inputEmailSenhaPergunta" name="email" onChange={(e) => setEmail(e.target.value)}/>
          <p>Senha</p>
          <input type="password" className="inputEmailSenhaPergunta" name="senha" onChange={(e) => setSenha(e.target.value)} />

          <div>
            <div className="botaoCadastrar">
              <button className={"botaoCadastrar"} type = "button" value = "text" onClick={(e) => {history.push("login"); e.preventDefault()}}>Cadastrar</button>
            </div>
            <div>
              <p className="perguntaCadastrado" align="right">
                Já está cadastrado?
              </p>
              <p className="perguntaLogin" align="right">
                Faça o login!
              </p>
            </div>
          </div>
        </div>

        {/* Linha vertical */}
        <div>
          <img
            src="https://i.ibb.co/RHz9bry/linha-vertical-removebg-preview.png"
            className="linhas"
          />
        </div>

        {/* Logo */}
        <div>
          <img
            src="https://i.ibb.co/CJ0TfSK/book-pedia-2.png"
            className="logos"
          />
        </div>
        </div>
          <Footer />
      </div>
  );
}

export default Cadastro;
