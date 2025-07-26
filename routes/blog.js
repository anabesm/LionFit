const express = require('express');
const router = express.Router();
const BlogService = require('../services/blog.service');

// lista todos
router.get('/', (req,res) => {
  res.render('blogs', {title: 'Blog'});
});

router.get('/api', (req,res) => {
  const blogs = BlogService.listar();
  res.json(blogs);
});
module.exports = router;
