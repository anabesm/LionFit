const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');

// lista todos
router.get("/", (req,res) => {
  const alunos = AlunoService.listar();
  res.render("aluno/index", {title: "Alunos", alunos});
});

module.exports = router;