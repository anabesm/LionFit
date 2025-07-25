const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');

// lista todos
router.get("/", (req,res) => {
  res.render("aluno", {title: "Alunos"});
});

router.get("/api", (req,res) => {
  const alunos = AlunoService.listar();
  res.json(alunos);
});

module.exports = router;