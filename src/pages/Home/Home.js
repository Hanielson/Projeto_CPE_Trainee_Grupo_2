import React from 'react'
import './home.css'
import Header from '../../Componentes/header/index'
import Carousel from 'react-elastic-carousel'
import Footer from '../../Componentes/footer/index'
import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'




export default function Home() {



    return (
        <div className={'Home'}>
            <Header />
            <article className={'Page'}>
                
                <div className={'fundo_rosa'}>
                    <img  id={'imagem1'} src={imagem1} alt={'Mulher lendo'}/>
                    <p id={'frase_principal'}>
                    “Caminhais em direção da solidão. Eu, não, eu tenho os livros.”
                    <p id={'autor'}>Marguerite Duras</p>
                    </p>
                    
                </div>

                <div className={'sobre'}>
                <h1 id={'Sobre'} className={'titulo'}>Sobre Nós</h1>
                <p id="up"  className={'texto'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    fringilla libero vel nulla suscipit tempus. Donec at mauris nec enim pulvinar
                    laoreet. Ut sed ligula a leo venenatis bibendum eget at felis. Donec gravida, est at
                    ultrices scelerisque, ligula dui dignissim nisl, ullamcorper consectetur purus arcu
                    in lacus. Duis imperdiet erat nunc, et dignissim tortor viverra id.
                </p>
                </div>
                
                <div className={'importancia'}>
                
                <img  id={'imagem2'} src={imagem2} alt={'Mulher lendo'}/>
                <h1 id={'Importancia'} className={'titulo'}>Importância da leitura</h1>
                <p id={'mid'}  className={'texto'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla libero
                    vel nulla suscipit tempus. Donec at mauris nec enim pulvinar laoreet. Ut sed ligula
                    a leo venenatis bibendum eget at felis. Donec gravida, est at ultrices scelerisque,
                    ligula dui dignissim nisl
                </p>
                </div>

                <div className={'compartilhar'}>

                <h1 id={'Share'} className={'titulo'}>Como posso compartilhar?</h1>
                <p id={'low'}  className={'texto'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla
                    libero vel nulla suscipit tempus. Donec at mauris nec enim pulvinar laoreet.
                    Ut sed ligula a leo venenatis bibendum eget at felis.
                </p>
                <img  id={'imagem3'} src={imagem3}/>
                
                </div>

                <h1 id={'lancamento'} className={'titulo'}>Lançamentos</h1>
                <Carousel itemsToShow={4}>
                <img  id={'livro'} src= "https://i.ibb.co/hRqZg7B/image-4.png" alt={'livro'}/>
                <img  id={'livro'} src= "https://i.ibb.co/MMw89Cp/image-6.png" alt={'livro'}/>
                <img  id={'livro'} src= "https://i.ibb.co/d2hsjB2/image-7.png" alt={'livro'}/>
                <img  id={'livro'} 
                src= "https://imgbb.online/images/2021/05/23/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-0190c3b96dc53af61c.jpg" alt={'livro'}/>
                <img  id={'livro'} 
                src="https://imgbb.online/images/2021/05/23/d816c439000eea434f997ff7cedebc420eb43a10be903d1e.jpg" alt={'livro'}/>
                <img  id={'livro'} src= "https://imgbb.online/images/2021/05/23/livro-verde_andrew-lang_CAPA-01a2d782d2a09c63f4.jpg" alt={'livro'}/>
                <img  id={'livro'} src= "https://imgbb.online/images/2021/05/23/197-dracula-de-bram-stoker-first-edition--2f61a6e15fd0e6d7d.jpg" alt={'livro'}/>
                </Carousel>
                
            </article>

            <Footer/>
        </div>
    )
}
