const AlunoModel = require("../models/aluno.model");
const alunos = require("../data/alunos.json"); 

let nextId = alunos.reduce((max, a) => Math.max(max, a.id), 0);

class AlunoService {

  static listar() {
    return alunos;
  }

  static recuperar(id) {
    return alunos.find(a => a.id == id) || null;
  }

  static criar(alunoData) {
    const id  = ++nextId;
    const now = new Date().toISOString();

    const novo = new AlunoModel(
      id,
      alunoData.login,
      alunoData.senha,
      alunoData.nome,
      alunoData.email,
      alunoData.telefone,
      alunoData.data_nascimento,
      alunoData.altura_m,
      alunoData.peso_kg,
      alunoData.plano,
      alunoData.treinos,
      now,
      now
    );

    alunos.push(novo);
    return novo;
  }

  static atualizar(id, alunoData) {
    const aluno = this.recuperar(id);
    if (!aluno) return null;

    Object.keys(alunoData).forEach(key => {
      if (key in aluno && key !== "id" && key !== "createdAt") {
        aluno[key] = alunoData[key];
      }
    });

    aluno.updatedAt = new Date().toISOString();
    return aluno;
  }

  static apagar(id) {
    const idx = alunos.findIndex(a => a.id == id);
    if (idx === -1) return false;
    alunos.splice(idx, 1);
    return true;
  }
}

module.exports = AlunoService;