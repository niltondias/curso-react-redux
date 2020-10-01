import React from 'react'


export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min + 1) + min)

    return (
        <div>
            <h1>Valor aleatório</h1>
            <p><strong>Valor mínimo: {min}</strong></p>
            <p><strong>Valor máximo: {max}</strong></p>
            <p><strong>O valor sorteado foi { aleatorio }</strong></p>
        </div>        
    )
}