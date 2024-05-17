const icone = document.createElement('i');
icone.classList.add('fa-solid', 'fa-house');

const ancoras = [
    { "url": "/index.html", "text": icone },
    { "url": "/Exercicios/exe01.html", "text": "Classificar Triângulo" },
    { "url": "/Exercicios/exe02.html", "text": "Descontos" },
    { "url": "/Exercicios/exe03.html", "text": "Placar de Futebol" },
    { "url": "/Exercicios/exe04.html", "text": "Busca de Nomes" },
    { "url": "/Exercicios/exe05.html", "text": "Posto de Gasolina" },
    { "url": "/Exercicios/exe06.html", "text": "Produtos com Desconto" },
    { "url": "/Exercicios/exe07.html", "text": "Natalidade e Mortalidade" }
];

function criaAncora(url, texto) {

    const a = document.createElement('a');
    a.href = url;

    if (typeof texto === 'string') {
        a.innerHTML = texto;
    } else {
        a.appendChild(texto);
    }

    // Adiciona a classe 'active' se a URL atual corresponde ao link
    if (window.location.pathname.endsWith(url)) {
        a.classList.add('active');
    }

    return a;
};

function criaLi(ancora) {

    const li = document.createElement('li');
    li.appendChild(ancora);

    return li;
};

function criaOl(ancoras) {

    const divMenu = document.createElement('divMenu');
    divMenu.id = "lista-de-exercicios";
    const ol = document.createElement('ol');
    divMenu.appendChild(ol);
    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.text);
        const li = criaLi(a);
        ol.appendChild(li);
    });

    return divMenu;

};

h1 = document.createElement('h1');
h1.classList.add('titulo');
h1.innerHTML = 'Programinhas';

// Menu sanduba 
const divMenu = document.createElement('div');
divMenu.classList.add('menu-suspenso')

const button = document.createElement('button');
button.classList.add('menu-hamburguer');
button.onclick = menuOnOff;

const i = document.createElement('i');
i.classList.add('fa-solid', 'fa-bars', 'fa-2x');

button.appendChild(i);

divMenu.appendChild(button);


// Cria o NavBar
const nav = document.createElement('nav');
nav.id = "menu";
nav.appendChild(h1);
nav.appendChild(criaOl(ancoras));
nav.appendChild(divMenu);
document.body.insertAdjacentElement('afterbegin', nav);


// Funções do menu sanduba
menu = document.querySelector('#lista-de-exercicios');

function menuOnOff() {

    estilo = window.getComputedStyle(menu);

    if (estilo.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});