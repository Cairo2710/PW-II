//IMPORTAÇÃO DO MODULO SEQUELIZE
const sequelize =  require("sequelize");

//CONEXÃO COM O BANCO
const connection = require("../database/database");

const produto = connection.define(
    'tbl_produto',
    {
        codigo_produto:{
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
        },
        nome_produto:{
            type: sequelize.STRING(255),
            allowNull: false
        },

        valor_produto:{
            type: sequelize.DECIMAL(10,2),
            allowNull: false
        },

        imagem_produto:{
            type: sequelize.STRING(500),
            allowNull: false
        },

        descricao_produto:{
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

module.exports = produto