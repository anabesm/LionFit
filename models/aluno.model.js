class AlunoModel {
  constructor( id, login, senha, nome, email, telefone, data_nascimento, altura_m, peso_kg, plano, treinos, createdAt, updatedAt) {
    this.id              = id;
    this.login           = login;
    this.senha           = senha;
    this.nome            = nome;
    this.email           = email;
    this.telefone        = telefone;
    this.data_nascimento = data_nascimento;
    this.altura_m        = altura_m;
    this.peso_kg         = peso_kg;
    this.plano           = plano;
    this.treinos         = treinos;
    this.createdAt       = createdAt;
    this.updatedAt       = updatedAt;
  }
}

module.exports = AlunoModel;