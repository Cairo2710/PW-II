//IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require("sequelize");

//CRIA A CONEXÃO COM O BANCO DE DADOS POR MEIO DO SEQUELIZE
/*
PARAMETROS:
1° - Nome de banco de dados
2° - Usuário do banco de dados
3° - A senha do banco de dados
4° - Objeto JSON com dados de configuração:
        1 - host do banco de dados
        2 - a porta
        2 - dialeto sql a ser utilizado
        3 - timezone
*/

const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        timezone: "-03:00"
    }
);

module.exports = connection;