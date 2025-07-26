
document.addEventListener('DOMContentLoaded', () => {
  const exercicioTitulo = document.getElementById('exercicio-titulo');
  const tabelaExerciciosBody = document.getElementById('tabela-exercicios');
  const daySelector = document.querySelector('.day-selector');

  let dadosAlunoCompleto = null; 

  async function carregarDadosAluno(id) {
    try {
      const response = await fetch(`/aluno/${id}`); 
      if (!response.ok) {
        throw new Error('Não foi possível carregar os dados do aluno.');
      }
      dadosAlunoCompleto = await response.json(); 
      
      renderizarTreino('segunda'); 
      ativarBotaoDia('segunda');

    } catch (error) {
      console.error("Erro:", error);
      exercicioTitulo.textContent = 'Erro ao carregar treino.';
    }
  }

  function renderizarTreino(dia) {
    if (!dadosAlunoCompleto || !dadosAlunoCompleto.treinos[dia]) {
      tabelaExerciciosBody.innerHTML = '<tr><td colspan="3">Nenhum treino cadastrado para este dia.</td></tr>';
      exercicioTitulo.textContent = "Treino de Descanso";
      return;
    }

    exercicioTitulo.textContent = `Treino de ${dia}`;
    
    tabelaExerciciosBody.innerHTML = '';

    const treinosDoDia = dadosAlunoCompleto.treinos[dia];

    treinosDoDia.forEach(exercicio => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${exercicio.nome_exercicio}</td>
        <td>${exercicio.repeticoes}x</td>
        <td>${exercicio.series}</td>
      `;
      tabelaExerciciosBody.appendChild(tr);
    });
  }

  function ativarBotaoDia(diaAtivo) {
    daySelector.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });
    daySelector.querySelector(`button[data-dia="${diaAtivo}"]`).classList.add('active');
  }

  daySelector.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.dataset.dia) {
      const diaSelecionado = event.target.dataset.dia;
      renderizarTreino(diaSelecionado);
      ativarBotaoDia(diaSelecionado);
    }
  });

  carregarDadosAluno(1); 
});