import React from 'react'

export default function Primeiro(){
    const msg = 'Seja bem vindo! O código dessa página (Primeiro.jsx) está logo abaixo:'
    const str_code = ``
    return (
        <div>
                <h2>Primeiro Component</h2>
                <p>{msg}</p>
                <pre>{str_code}</pre>
           </div>
    )
}