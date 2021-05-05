import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="all">
      <div className="top-box">
        <div className="logo">
          <img src="https://i.ibb.co/j8PcjVC/Book-Pedia-1-removebg-preview-1.png" />
        </div>

        <div className="navegue">
          <p className="textoCimaNavegue" align="center">
            Navegue
          </p>
          <div className="links">
            <p>Home</p> <p>|</p>
            <p>Livros</p>
            <p>|</p>
            <p>Usuários</p>
          </div>
        </div>

        <hr className = "linha"/>

        <div className="contatos">
          <p className="textoCimaContatos" align="center">
            Contatos
          </p>
          <div className="contatosTexto">
            <p align="center">Contato@email.com</p>
            <p align="center">+55 (77) 9 9999-9999 | +55 (31) 9 9898-9898</p>
          </div>
        </div>
      </div>
      <p className="bottom-box" align="right">Desenvolvido pela CPEJr</p>
    </div>
  );
}

export default Footer;
