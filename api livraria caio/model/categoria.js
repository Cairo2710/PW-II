//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require("../database/database");

/*
    PARAMETROS DO MÉTODO define
    1º NOME DA TABELA
    2º CAMPOS DA TABELA E SUAS REGRAS
*/
const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria:{
            type: sequelize.STRING(250),
            allowNull: false
        }
    }
);

/*
    SINCRONIZAÇÃO COM O BANCO DE DADOS
    CRIA A TABELA CASO ESSA NÃO EXISTA
*/
Categoria.sync({force:false});

module.exports = Categoria;