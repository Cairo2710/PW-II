const express = require("express");

const produtoModel = require("../model/Produto");

const router = express.Router();

//rotas produto
router.post("/produto/cadastrarproduto", (req,res) => {
    res.send("produto cadastrado com sucesso");
});

router.get("/produto/listarproduto", (req,res) => {
    res.send("produto listado com sucesso");
});

router.put("/produto/alterarproduto", (req,res) => {
    res.send("produto alterado com sucesso");
});

router.delete("/produto/deletarproduto", (req,res) => {
    res.send("produto deletado com sucesso");
});

module.exports = router