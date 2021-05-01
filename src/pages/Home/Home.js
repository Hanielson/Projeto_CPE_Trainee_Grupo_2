import React from 'react';
import Logo from 'D:/MS_Visual_Studio_Code_Res/React/ProjetoTrainee/branch1/src/logo.png';
import 'D:/MS_Visual_Studio_Code_Res/React/ProjetoTrainee/branch1/src/style.css';

function Home () {

    return (
    <div className="Home">
        <head>
            <meta charset="utf-8" />
            <title>Bookpedia</title>
        </head>

        <body>
            <main>
                <header>
                    <div id="nav">
                        <ul class="navigation1">
                            <img id="Logo" src={ Logo } alt="Bookpedia_Logo" />
                            <li class="nav1"><a href="start.html">Home</a></li>
                            <li class="nav1"><a href="link2.html">Cadastro</a></li>
                            <li class="nav1"><a href="link3.html">Login</a></li>
                            <li class="nav1"><a href="link4.html">Livros</a></li>
                            <li class="nav1"><a href="link5.htm">Perfil</a></li>
                            <li class="nav1"><a href="link6.html">Usuários</a></li>
                        </ul>
                    </div>
                </header>
                        

                <article class="Page">
                    <br /><br /><br />
                    <h2 id="Home">HOME</h2>

                    <h4 id="Sobre">Sobre Nós</h4>
                    <p id="up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla libero vel nulla
                        suscipit
                        tempus. Donec at mauris nec enim pulvinar laoreet. Ut sed ligula a leo venenatis bibendum eget at felis.
                        Donec gravida, est at ultrices scelerisque, ligula dui dignissim nisl, ullamcorper consectetur purus
                        arcu in lacus. Duis imperdiet erat nunc, et dignissim tortor viverra id. </p>
                    <h4 id="Importancia">Qual a importância da leitura?</h4>
                    <p id="mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla libero vel nulla
                        suscipit
                        tempus. Donec at mauris nec enim pulvinar laoreet. Ut sed ligula a leo venenatis bibendum eget at felis.
                        Donec gravida, est at ultrices scelerisque, ligula dui dignissim nisl, ullamcorper consectetur purus
                        arcu in lacus. Duis imperdiet erat nunc, et dignissim tortor viverra id. Vivamus et pretium sem.
                        Suspendisse massa sapien, cursus nec ipsum sit amet, vulputate condimentum arcu. Mauris molestie eros
                        eget cursus eleifend. </p>
                    <h4 id="Share">Como posso compartilhar?</h4>
                    <p id="low">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla libero vel nulla
                        suscipit
                        tempus. Donec at mauris nec enim pulvinar laoreet. Ut sed ligula a leo venenatis bibendum eget at felis.
                    </p>
                </article>

                <footer class="Footer">
                    <p>Bookpedia - Leitura Facilitada!</p>
                    <p><small>Copyright</small></p>
                </footer>
            </main>
        </body>
    </div>
    )
}

export default Home;