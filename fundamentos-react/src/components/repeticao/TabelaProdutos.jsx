import './TabelaProdutos.css'
import produtos from '../../data/produtos'
import React from 'react'

export default props => {
    const produtosTD = produtos.map((produto,i) =>{
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    } )

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTD}
                </tbody>
            </table>
        </div>
    )
}