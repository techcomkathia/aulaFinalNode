// services/produtoService.js
const Produto = require('../models/produtoModel');

async function getProdutos() {
    try {
        const produtos = await Produto.findAll();
        return { status: 200, mensagem: "Lista de produtos encontrada", dados: produtos };
    } catch (error) {
        return { status: 400, erro: "Erro ao buscar produtos: " + error.message };
    }
}

async function getProdutoId(id) {
    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return { status: 404, erro: "Produto não encontrado" };
        }
        return { status: 200, mensagem: "Produto encontrado", dados: produto };
    } catch (error) {
        return { status: 400, erro: "Erro ao buscar produto: " + error.message };
    }
}

async function postProduto(dados) {
    try {
        const novoProduto = await Produto.create(dados);
        return { status: 201, mensagem: "Produto criado com sucesso", dados: novoProduto };
    } catch (error) {
        return { status: 400, erro: "Erro ao criar produto: " + error.message };
    }
}

module.exports = {
    getProdutos,
    getProdutoId,
    postProduto
};
