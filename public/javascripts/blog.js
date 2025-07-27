let data = [];
let totalPages = 0;
let currentPage = 0;

async function totalArticles () {
    const response = await fetch('http://localhost:3000/blog/api');
    const data = await response.json();
    totalPages = Math.ceil(data.length / 5);
}

totalArticles();

async function listArticles () {
    const response = await fetch('http://localhost:3000/blog/api');
    const data = await response.json();

    let blogDiv = document.getElementById('articles');
    blogDiv.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let article = data[i];
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        const content = document.createElement('div');
        content.classList.add('content');
        
        const dataPublicacao = new Date(article.data_publicacao);
        const descricao = article.conteudo.slice(0, 200) + '...';
        const tags = article.tags.map(tag => `<li>${tag}</li>`).join('');
        
        content.innerHTML = `
            <h2>${article.titulo}</h2>
            <p class="author">${article.autor}</p>
            <time datetime="${dataPublicacao}">${dataPublicacao.toLocaleDateString('pt-BR')}</time>
            <p>${descricao}</p>
            <ul class="tags">${tags}</ul>
            <button>Leia Mais</button>
        `;

        const img = document.createElement('img');
        img.src = `${article.imagem}`;
        img.alt = article.titulo;

        articleDiv.appendChild(content);
        articleDiv.appendChild(img);

        blogDiv.appendChild(articleDiv);

    }
    updatePage();

}

listArticles();

function updatePage() {
    const articles = Array.from(document.querySelectorAll('.article'));

    articles.forEach((element, index) => {
        if (index >= currentPage * 5 && index < (currentPage + 1) * 5) {
            element.classList.add('ativo');
        } else {
            element.classList.remove('ativo');
        }
    });
}

window.nextPage = function () {
    if (currentPage + 1 === totalPages) {
        currentPage = 0;
    } else {
        currentPage++;
    }
    updatePage();
};


window.previousPage = function () {
    if (currentPage - 1 < 0) {
        currentPage = totalPages - 1;
    } else {
        currentPage--;
    }
    updatePage();
}


function search() {
    const searchInput = document.getElementById('search-input');
    const value = searchInput.value.toLowerCase();
    const articles = Array.from(document.querySelectorAll('.article'));

    for (let i = 0; i < articles.length; i++) {
        const title = articles[i].querySelector('h2').textContent.toLowerCase();
        const author = articles[i].querySelector('.author').textContent.toLowerCase();
        const tags = Array.from(articles[i].querySelectorAll('.tags li')).map(tag => tag.textContent.toLowerCase());

        if (title.includes(value) || author.includes(value) || tags.some(tag => tag.includes(value))) {
            articles[i].classList.add('ativo');
        } else {
            articles[i].classList.remove('ativo');
        }
    }
}

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

