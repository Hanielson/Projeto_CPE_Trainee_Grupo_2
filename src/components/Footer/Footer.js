import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="all">

      <div className="top-box">

        <div className="logo">
          <img src="https://i.ibb.co/CJ0TfSK/book-pedia-2.png" />
        </div>

        <div className="navegue">
          <p className="textoCima" align="center">
            Navegue
          </p>
          <div className="links">
            <p>Home</p>
            <p>&nbsp;&nbsp;</p>
            <p>Livros</p>
            <p>&nbsp;&nbsp;</p>
            <p>Usuários</p>
          </div>
        </div>
        
        <img src="https://i.ibb.co/RHz9bry/linha-vertical-removebg-preview.png" className="linha" />

        <div className="contatos">
          <p className="textoCima" align="center">
            Contatos
          </p>
          <div className="contatosTexto" align="center">
            <p>Contato@email.com</p>
            <div className="numeroTelefone" >
              <p>+55 (77) 9 9999-9999</p>
              <p>&nbsp;&nbsp;</p>
              <p>+55 (31) 9 9898-9898</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
