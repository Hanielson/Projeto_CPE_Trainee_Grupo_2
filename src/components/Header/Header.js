import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <Box className="box" display="flex">
      
      <Container className="boxImage">
        <img src="https://i.ibb.co/j8PcjVC/Book-Pedia-1-removebg-preview-1.png"/>
      </Container>

      <Box align="center" className="navegue">
        <Typography className="textoCima"> Navegue </Typography>
        <Container className="linksNavegue">
          <p> Home </p>
          <p> | </p>
          <p> Livros </p>
          <p> | </p>
          <p> Usuários </p>
        </Container>
      </Box>
      
      <Box align="center" className="contatos">
        <Typography className="textoCima"> Contatos </Typography>
        <Container className="textoContatos">
          <p> Contato@email.com </p>
          <p> +55 (31) 9 9999-9999 | +55 (31) 9 9999-9999 </p>
        </Container>
      </Box>

    </Box>
  );
}

export default Header;
