import React from "react";
import './formulario.css';

function Formulario() {
    return (
       
        <div className="container">
            <h1>Controle de Estoque</h1>
    
            <section className="form-section">
                <h2>Adicionar Produto</h2>
                <form id="formAdicionar">
                    <input type="number" id="codigo" placeholder="Código" required />
                    <input type="text" id="nome" placeholder="Nome do Produto" required />
                    <input type="number" id="quantidade" placeholder="Quantidade" required />
                    <input type="number" id="preco" placeholder="Preço (R$)" step="0.01" required />
                    <button type="submit">Adicionar</button>
                </form>
            </section>
    
            <section className="form-section">
                <h2>Buscar Produto</h2>
                <input type="number" id="buscarCodigo" placeholder="Código do Produto" />
                <button onclick="buscarProduto()">Buscar</button>
                <p id="resultadoBusca"></p>
            </section>
    
            <section className="form-section">
                <h2>Lista de Produtos</h2>
                <table id="tabelaProdutos">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço (R$)</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* -- Produtos serão inseridos aqui via JS futuramente -- */}
                    </tbody>
                </table>
            </section>
        </div>
    
 
    );
}

export default Formulario;