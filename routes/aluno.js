const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');


router.get("/", (req, res) => {
  res.render('aluno', { title: 'Dashboard do Aluno' });
});

router.get("/listagem", (req, res) => {
  res.json(AlunoService.listar());
});

router.get("/api", (req,res) => {
  const alunos = AlunoService.listar();
  res.json(alunos);
});

module.exports = router;