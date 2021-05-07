import React from 'react'
import TextoFormulario from '../texto-formulario/TextoFormulario'


export default function InputFormulario({ className, type, name, onChange, textoInput }) {
    return (
        <div className={className}>
            <TextoFormulario textoInput={textoInput} />
            <input
                type={type}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}