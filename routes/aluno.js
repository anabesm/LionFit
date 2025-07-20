const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');

// lista todos
router.get("/", (req,res) => {
  res.json(AlunoService.listar());
});

// busca um
router.get("/:id", (req,res) => {
  const a = AlunoService.recuperar(req.params.id);
  if (!a) return res.status(404).send("Aluno não encontrado");
  res.json(a);
});

// cria
router.post("/", (req,res) => {
  const novo = AlunoService.criar(req.body);
  res.status(201).json(novo);
});

// atualiza
router.put("/:id", (req,res) => {
  const atualizado = AlunoService.atualizar(req.params.id, req.body);
  if (!atualizado) return res.status(404).send("Aluno não encontrado");
  res.json(atualizado);
});

// exclui
router.post("/:id/apagar", (req,res) => {
  if (!AlunoService.apagar(req.params.id)) 
    return res.status(404).send("Aluno não encontrado");
  res.status(204).end();
});

module.exports = router;