import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 90
    const geraIdade = () => parseInt(Math.random() * (max-min) ) + min

    return (
        <div>
           <div>Filho</div>
            <button onClick={ _ => cb('João', geraIdade(), true) }>
                Fornecer informações
            </button>
        </div>
    )
}