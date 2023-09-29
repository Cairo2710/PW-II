const express = require("express");

const categoriaModel = require("../model/Categoria");

const router = express.Router();

//rotas categoria
router.post("/categoria/cadastrarCategoria", (req,res) => {
    res.send("Categoria cadastrada com sucesso");
});

router.get("/categoria/listarCategoria", (req,res) => {
    res.send("Categoria listada com sucesso");
});

router.put("/categoria/alterarCategoria", (req,res) => {
    res.send("Categoria alterada com sucesso");
});

router.delete("/categoria/deletarCategoria", (req,res) => {
    res.send("Categoria deletada com sucesso");
});

module.exports = router