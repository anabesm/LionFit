function switchImg(i) {
    const imgs = document.querySelectorAll('.carrossel-imagens img');
    const botoes = document.querySelectorAll('.carrossel-imagens .botao');

    for (let j = 0; j < imgs.length; j++) {
        if (j === i) {
            botoes[j].classList.add('botao-ativo');
            imgs[j].style.display = "block";
        } else {
            botoes[j].classList.remove('botao-ativo');
            imgs[j].style.display = "none";
        }
    }
}

const cards = document.querySelectorAll('.card-comentario');
const botoes = document.querySelectorAll('.mural .botoes button');

let indexAtivo = 1; 

function switchCard(i) {
    const total = cards.length;
    indexAtivo = i % total;

    const container = document.querySelector('.carrossel-comentarios');
    container.innerHTML = '';

    const anterior = cards[(indexAtivo - 1 + total) % total];
    const atual = cards[indexAtivo];
    const proximo = cards[(indexAtivo + 1) % total];

    [anterior, atual, proximo].forEach((card) => {
        card.classList.remove('ativo');
        container.appendChild(card);
    });

    atual.classList.add('ativo');

    botoes.forEach(b => b.classList.remove('ativo'));
    if (botoes[i]) {
        botoes[i].classList.add('ativo');
    }
}

setInterval(() => {
    switchCard((indexAtivo + 1) % cards.length);
}, 5000);

switchCard(indexAtivo);

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

