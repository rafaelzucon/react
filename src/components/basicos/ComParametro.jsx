import React from 'react'

export default function ComParametro(props){
    console.log(props)
    const str_code = ``
    const notaInt = Math.ceil(props.nota)
        const status = props.nota >= 7 ? ' Aprovado' : ' Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno} tem nota {notaInt}</h3>
            e está 
            {status}
            <pre>{str_code}</pre>
        </div>
    )
}