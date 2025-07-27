const express = require('express');
const router  = express.Router();
const AlunoService  = require('../services/aluno.service');

router.get("/", (req, res) => {
  res.render('aluno', { title: 'Dashboard do Aluno' });
});

router.get("/listagem", (req,res) => {
  res.json(AlunoService.listar());
});

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const aluno = AlunoService.login(email, senha);
  if (aluno) {
    res.render('aluno', { title: 'Aluno', aluno });
  } else {
    res.status(401).send('Email ou senha incorretos');
  }
});

router.get("/login-aluno", (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get("/:id", (req,res) => {
  console.log("entrou");
  const a = AlunoService.recuperar(req.params.id);
  if (!a) return res.status(404).send("Aluno não encontrado");
  res.json(a);
});


module.exports = router;