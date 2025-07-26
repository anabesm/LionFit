const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');

router.get("/", (req, res) => {
  res.render('aluno', { title: 'Dashboard do Aluno' });
});

router.get("/listagem", (req,res) => {
  res.json(AlunoService.listar());
});

router.get("/:id", (req,res) => {
  const a = AlunoService.recuperar(req.params.id);
  if (!a) return res.status(404).send("Aluno não encontrado");
  res.json(a);
});


module.exports = router;