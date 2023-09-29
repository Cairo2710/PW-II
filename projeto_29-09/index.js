//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR JSON
app.use(express.json());

// TESTE DE CONEXÃO
const connection = require("./database/database")
console.log(connection);

// IMPORTAÇÃO DA CONTROLLER DE CATEGORIA
const categoriaController = require("./controller/Categoria");
app.use("/", categoriaController);

const produtoController = require("./controller/Produto");
app.use("/", produtoController);

//CRIAÇÃO DO SERVIDOR WEB DE REQUISIÇÕES E RESPOSTAS
app.listen(3000, ()=>{
    console.log('Projeto PW2 rodando em: http://localhost:3000');
});