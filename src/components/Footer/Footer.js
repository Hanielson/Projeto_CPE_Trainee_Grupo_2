import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="all"> 
      <div className="top-box">
        
        {/*Logo que importada de um site, já que a ferramenta
        que uso não tem suporte gratuito para importar*/}
        <div className="logo">
          <img src="https://i.ibb.co/CJ0TfSK/book-pedia-2.png" />
        </div>

        {/*Links das outras páginas*/}
        <div className="navegue">
          <p className="textoCima" align="center">
            Navegue
          </p>
          <div className="links">
            <a href="https://i.ibb.co/CJ0TfSK/book-pedia-2.png">
              <p>Home</p>
            </a>
            <p>&nbsp;&nbsp;</p>
            <p>Livros</p>
            <p>&nbsp;&nbsp;</p>
            <p>Usuários</p>
          </div>
        </div>

        {/*GAMBIARRA! imagem para funcionar com linha vertical, já
        que usar <hr/> está me trazendo problemas*/}
        <img src="https://i.ibb.co/RHz9bry/linha-vertical-removebg-preview.png"className="linha"/>


        {/*Contatos do site*/}
        <div className="contatos">
          <p className="textoCima" align="center">
            Contatos
          </p>
          <div className="contatosTexto" align="center">
            <p>Contato@email.com</p>
            <div className="numeroTelefone">
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
