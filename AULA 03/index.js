//IMPORTANDO O MODULO DO EXPRESS:
const express = require ('express');

//CRIA UMA INSTANCIA EXECULTAVEL DO EXPRESS
const app = express();

//ROTA DE GET(RAIZ)
app.get('/', (req, res)=>{
    res.send('EXEMPLO DE ROTA DE GET');
});

//ROTA DE GET(CLIENT)
app.get('/cliente', (req, res)=>{
    res.send('ROTA DE GET CLIENTE');
});

//ROTA DE CADASTRO(POST)
app.post('/cadastrar', (req, res)=>{
    res.send('ROTA POST DE CADASTRO');
});

//ROTA DE ALTERAÇÃO(PUT)
app.put('/alterar', (req, res)=>{
    res.send('ROTA PUT DE ALTERAÇÃO');
});

//ROTA DE EXCLUIR(DELET)
app.delete('/excluir', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO');
});

//SERVIDOR REQUISIÇÃO/RESPOSTA
app.listen(3000, ()=>{
    console.log('Servidor Rodando!');
});