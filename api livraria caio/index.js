//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR JSON
app.use(express.json());

//CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM DADOS DE FORMULARIO
app.use(express.urlencoded({extended:true}));

//IMPORTAÇÃO DO SERVIDOR DA CONTROLLER DE CATEGORIA
const categoriaController = require("./controller/Categoria");
app.use("/", categoriaController)

//CRIAÇÃO DO SERVIDOR WEB DE REQUISIÇÕES E RESPOSTAS
app.listen(3000, ()=>{
    console.log('API LIVRARIA RODANDO EM: http://localhost:3000');
});