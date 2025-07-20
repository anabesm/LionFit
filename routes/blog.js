const express = require('express');
const router = express.Router();
const BlogService = require('../services/blog.service');

// lista todos
router.get('/', (req,res) => {
  res.json(BlogService.listar());
});

// busca um
router.get('/:id', (req,res) => {
  const b = BlogService.recuperar(req.params.id);
  if (!b) return res.status(404).send('Post não encontrado');
  res.json(b);
});

// cria
router.post('/', (req,res) => {
  const novo = BlogService.criar(req.body);
  res.status(201).json(novo);
});

// atualiza
router.put('/:id', (req,res) => {
  const atualizado = BlogService.atualizar(req.params.id, req.body);
  if (!atualizado) return res.status(404).send('Post não encontrado');
  res.json(atualizado);
});

// exclui
router.delete('/:id', (req,res) => {
  if (!BlogService.apagar(req.params.id))
    return res.status(404).send('Post não encontrado');
  res.status(204).end();
});

module.exports = router;
