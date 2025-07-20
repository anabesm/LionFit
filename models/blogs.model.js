class BlogModel {
  constructor(id, titulo, imagem, autor, data_publicacao, tags, conteudo) {
    this.id               = id;
    this.titulo           = titulo;
    this.imagem           = imagem;
    this.autor            = autor;
    this.data_publicacao  = data_publicacao;
    this.tags             = tags;
    this.conteudo         = conteudo;
  }
}

module.exports = BlogModel;
