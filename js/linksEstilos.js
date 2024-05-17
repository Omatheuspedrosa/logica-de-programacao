const links = [
    {'rel': 'stylesheet', 'href': '/css/estilo.css'},
    {'rel': 'stylesheet', 'href': '/css/responsividade.css'}
];

links.forEach(link => {

    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l);

});