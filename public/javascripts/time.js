// Espera o documento HTML estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  toggle.addEventListener('click', () => {
    console.log('entrou');
    menu.classList.toggle('ativo');
  });
  const container = document.getElementById('team-grid-container');

  // 1. FAZ A REQUISIÇÃO FETCH para a nossa nova API
  fetch('/nosso-time/api/membros')
    .then(response => {
      // Converte a resposta do servidor para JSON
      if (!response.ok) {
        throw new Error('Erro na rede: ' + response.statusText);
      }
      return response.json();
    })
    .then(membros => {
      // 2. PROCESSA OS DADOS recebidos
      if (membros.length === 0) {
        container.innerHTML = '<p>Nenhum membro da equipe encontrado.</p>';
        return;
      }

      // Para cada membro recebido, cria o HTML do card
      membros.forEach(membro => {
        const memberCardHTML = `
          <div class="team-member">
            <div class="member-image">
              <img src="${membro.imagem}" alt="${membro.nome}">
            </div>
            <div class="member-info">
              <h3>${membro.nome}</h3>
              <h4>${membro.cargo}</h4>
              <p>${membro.descricao}</p>
            </div>
          </div>
        `;
        // 3. ADICIONA O HTML gerado na página
        container.innerHTML += memberCardHTML;
      });
    })
    .catch(error => {
      // Em caso de erro, exibe uma mensagem no console e na página
      console.error('Falha ao buscar os membros da equipe:', error);
      container.innerHTML = '<p>Não foi possível carregar os membros da equipe. Tente novamente mais tarde.</p>';
    });

});