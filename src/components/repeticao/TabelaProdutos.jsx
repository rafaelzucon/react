import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default (props) =>{
    function getLinhas(){
        return produtos.map((prod, i) => {
            return (
                <tr key={prod.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>R$ {prod.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return(
        <div>
            <table className="TabelaProdutos">
            <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {getLinhas()}
                </tbody>
            </table>
        </div>
    );
};