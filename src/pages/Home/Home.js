import React from 'react'
import Logo from '../../assets/logo.png'
import './home.css'
import Header from '../../Componentes/header/index'
import Footer from '../../Componentes/footer/index'

export default function Home() {
    return (
        <div className={'Home'}>
            <Header />
            <article className={'Page'}>
                <br /><br /><br />
                <h2 id={'Home'}>HOME</h2>

                <h4 id={'Sobre'}>Sobre Nós</h4>
                <p id="up">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    fringilla libero vel nulla suscipit tempus. Donec at mauris nec enim pulvinar
                    laoreet. Ut sed ligula a leo venenatis bibendum eget at felis. Donec gravida, est at
                    ultrices scelerisque, ligula dui dignissim nisl, ullamcorper consectetur purus arcu
                    in lacus. Duis imperdiet erat nunc, et dignissim tortor viverra id.
                </p>
                <h4 id={'Importancia'}>Qual a importância da leitura?</h4>
                <p id={'mid'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla libero
                    vel nulla suscipit tempus. Donec at mauris nec enim pulvinar laoreet. Ut sed ligula
                    a leo venenatis bibendum eget at felis. Donec gravida, est at ultrices scelerisque,
                    ligula dui dignissim nisl, ullamcorper consectetur purus arcu in lacus. Duis
                    imperdiet erat nunc, et dignissim tortor viverra id. Vivamus et pretium sem.
                    Suspendisse massa sapien, cursus nec ipsum sit amet, vulputate condimentum arcu.
                    Mauris molestie eros eget cursus eleifend.
                </p>
                <h4 id={'Share'}>Como posso compartilhar?</h4>
                <p id={'low'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla
                    libero vel nulla suscipit tempus. Donec at mauris nec enim pulvinar laoreet.
                    Ut sed ligula a leo venenatis bibendum eget at felis.
                </p>
            </article>

            <Footer/>
        </div>
    )
}
