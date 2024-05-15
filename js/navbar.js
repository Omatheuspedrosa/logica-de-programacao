const ancoras = [
    {"url": "index.html", "text": "Home"},
    {"url": "/Exercícios/exe01.html", "text": "Classificar Triângulo"},
    {"url": "/Exercícios/exe02.html", "text": "Descontos"},
    {"url": "/Exercícios/exe03.html", "text": "Placar de Futebol"},
    {"url": "/Exercícios/exe04.html", "text": "Busca de Nomes"},
    {"url": "/Exercícios/exe05.html", "text": "Posto de Gasolina"},
    {"url": "/Exercícios/exe06.html", "text": "Produtos com Desconto"},
    {"url": "/Exercícios/exe07.html", "text": "Natalidade e Mortalidade"}
];

function criaAncora(url, texto) {

    const a = document.createElement(a);
    a.href = url;
    a.innerHTML = texto;

    return a;
};

function criaLi(ancora) {

    const li = document.createElement(li);
    li.appendChild(ancora);

    return li;
};

function criaUl(ancoras) {

    const ul = document.createElement('ul');
    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);
    });

    return ul;;

};

const nav = document.createElement('nav');
nav.appendChild(criaUl(ancoras));
