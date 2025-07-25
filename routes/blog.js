const express = require('express');
const router = express.Router();
const BlogService = require('../services/blog.service');

// lista todos
router.get('/', (req,res) => {
  const blogs = BlogService.listar();
  res.render('blogs', {title: 'Blog', blogs});
});

module.exports = router;
