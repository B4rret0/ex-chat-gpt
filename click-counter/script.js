let contador = document.getElementById('contar');
let valor = 0;
let botton = document.getElementById('butao');

function incrementar() {
    valor++;
    contador.innerText = valor;
}

document.addEventListener('click', incrementar); {
    incrementar();
}
