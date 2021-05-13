import React, { useState } from 'react';
import './Cadastro.css';
import Footer from '../../Componentes/footer';
import Header from '../../Componentes/header';

function Cadastro() {
  
  const  [usuario, setUsuario] = useState();
  
  function handleInputChange(e){
    
    const key = e.target.name;
    
    const newUsuario = {...usuario};

    newUsuario[key] = e.target.value;

    setUsuario (newUsuario);
    console.log(newUsuario);
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
              <input name="apelido" onChange={handleInputChange}/>
            </div>
            <div className="inputNomeSobrenome">
              <p className="espacamentoSobrenome">Frase que te define</p>
              <input className="inputSobrenome" name="frase" onChange={handleInputChange} />
            </div>
          </div>

          <div>
            <div>
              <p>Rua</p>
              <input className="inputRuaCidade" name="rua" onChange={handleInputChange} />
            </div>
            <div>
              <p className="espacamentoNumeroUF">Número</p>
              <input className="inputNumeroUF" name="numero" onChange={handleInputChange} />
            </div>
          </div>

          <div>
            <div>
              <p>Cidade</p>
              <input className="inputRuaCidade" name="cidade" onChange={handleInputChange}/>
            </div>
            <div>
              <p className="espacamentoNumeroUF">UF</p>
              <input className="inputNumeroUF" name="uf" onChange={handleInputChange} />
            </div>
          </div>

          <p>País</p>
          <input className="inputEmailSenhaPergunta" name="pais" onChange={handleInputChange} />
          <p>E-mail</p>
          <input type="email" className="inputEmailSenhaPergunta" name="email" onChange={handleInputChange}/>
          <p>Senha</p>
          <input type="password" className="inputEmailSenhaPergunta" name="senha" onChange={handleInputChange} />

          <div>
            <div className="botaoCadastrar">
              <button className="botaoCadastrar">Cadastrar</button>
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
        
        <div>
          <Footer />
        </div>

      </div>
  );
}

export default Cadastro;
