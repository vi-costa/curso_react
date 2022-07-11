import React from 'react'
import produto from '../../data/produto'

export default props => { 

    const produtosli = produto.map((produto) => { 
        return (
            <tr key = {produto.id}>
               <td>{produto.id}</td> <td>{produto.nome}</td>  <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <div>
            <table border = "1">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                          Nome
                        </th>
                        <th>
                            Preço
                        </th>
                    </tr>
               </thead>    
               <tbody>
                    {produtosli}
               </tbody>
            </table>
        </div>
    )
}