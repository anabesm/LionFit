const BlogModel = require('../models/blogs.model');
const blogs = require('../data/blogs.json');

let nextBlogId = blogs.reduce((max, b) => Math.max(max, b.id), 0);

class BlogService {
  static listar() {
    return blogs;
  }

  static recuperar(id) {
    return blogs.find(b => b.id == id) || null;
  }

  static criar(data) {
    const id = ++nextBlogId;
    const novo = new BlogModel(
      id,
      data.titulo,
      data.imagem,
      data.autor,
      data.data_publicacao,
      data.tags,
      data.conteudo
    );
    blogs.push(novo);
    return novo;
  }

  static atualizar(id, data) {
    const blog = this.recuperar(id);
    if (!blog) return null;
    Object.keys(data).forEach(k => {
      if (k !== 'id') blog[k] = data[k];
    });
    return blog;
  }

  static apagar(id) {
    const idx = blogs.findIndex(b => b.id == id);
    if (idx === -1) return false;
    blogs.splice(idx,1);
    return true;
  }
}

module.exports = BlogService;
