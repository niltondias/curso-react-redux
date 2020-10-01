import React, {useState} from 'react'

export default props => {

    let [qtd,setQtd] = useState(6)
    let [numeros, setNumeros] = useState([]) 

    function geraNumeros(qtdNumeros) {
        let numeros = []
        let x = 0, min = 0, max = 59, n = 0
        
        while(x < qtdNumeros) {
            n = parseInt( Math.random() * (max + 1 - min) + min )
            if(numeros.indexOf(n) < 0) {
                numeros.push(n)
                x++
            }
        }
    
        numeros.sort((n1,n2) => n1 - n2 )  
        
        return numeros
    }

    return (
        <div>
            <h2>Mega Sena</h2>
            <h3>Boa sorte!</h3>
            <label htmlFor="MegaInput">Quantidade: </label>
            <input 
                id="quandidade"
                type="number"
                min={6}
                max={15}
                value={qtd}
                onChange={ e => setQtd( +e.target.value ) }
            />
            <div>
                <label id="numeros">Números: </label>
                <label id="numeros">{numeros.join(', ')}</label>
            </div>
            <div>
                <button onClick={_ => {setNumeros(geraNumeros(qtd))} }>
                    Clique para gerar os números
                </button>
            </div>
        </div>
    )
}