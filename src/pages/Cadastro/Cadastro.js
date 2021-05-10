import React from 'react';
import './Cadastro.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Cadastro() {
  return (
    <div>
      <div className="cadastro">
        <div>
          {' '}
          <Header />
        </div>

        {/* Botões e inputs*/}
        <div className="botoes_inputs">
          <div>
            <div className="inputNomeSobrenome">
              <p>Nome</p>
              <input />
            </div>
            <div className="inputNomeSobrenome">
              <p className="espacamentoSobrenome">Sobrenome</p>
              <input className="inputSobrenome" />
            </div>
          </div>

          <div>
            <div>
              <p>Rua</p>
              <input className="inputRuaCidade" />
            </div>
            <div>
              <p className="espacamentoNumeroUF">Número</p>
              <input className="inputNumeroUF" />
            </div>
          </div>

          <div>
            <div>
              <p>Cidade</p>
              <input className="inputRuaCidade" />
            </div>
            <div>
              <p className="espacamentoNumeroUF">UF</p>
              <input className="inputNumeroUF" />
            </div>
          </div>

          <p>E-mail</p>
          <input className="inputEmailSenhaPergunta" />
          <p>Senha</p>
          <input type="password" className="inputEmailSenhaPergunta" />
          <p>Qual seu livro de infância preferido?</p>
          <input className="inputEmailSenhaPergunta" />

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

      <div className="Foot"> <Footer /> </div>
      
    </div>
  );
}

export default Cadastro;
