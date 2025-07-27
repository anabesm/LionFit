async function login(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:3000/aluno/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });

    if (response.status === 200) {
        const aluno = await response.json();
        localStorage.setItem('aluno', JSON.stringify(aluno));
        window.location.href = '/aluno';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
}

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});