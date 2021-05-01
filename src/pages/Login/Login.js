import React , {useState} from 'react';
import Logo from '../../../src/logo.png';
import '../../../src/style.css';

function Login () {
    const [usuario, setUsuario] = useState([]);

    function handleInfoChange(e){
        const key = e.target.value;

        const newUsuario = usuario;
        newUsuario[key] =  e.target.value;

        setUsuario(newUsuario);
    }

    return (
    <div className="Cadastro">
        <head>
            <meta charset="utf-8" />
            <link rel="stylesheet" href="style.css" />
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
                <h2 id="Login">LOGIN</h2>
                    <div>
                    <h1>Novo Usuário</h1>
                    <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInfoChange}
                    />
                    <br />
                    <input 
                    type="text"
                    placeholder="Senha"
                    name="senha"
                    onChange={handleInfoChange}
                    />
                    <br />
                    <button>Entrar</button>
                </div>  
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

export default Login;