let body = document.getElementById('body')
let geral = document.getElementById('geral')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let green = document.getElementById('green')

function entroured() { //  entrou no VERMELHO
    geral.style.backgroundColor = 'red'
    red.style.border = '1px ridge white'
    geral.style.border = '1px ridge white'

}

function saiured() { //  saiu do VERMELHO
    geral.style.backgroundColor = 'white'
    red.style.border = '0px'
}

function entroublue() { //  entrou no AZUL
    geral.style.backgroundColor = 'blue'
    blue.style.border = '1px outset white'
    geral.style.border = '1px ridge white'
}

function saiublue() { //  saiu do AZUL
    geral.style.backgroundColor = 'white'
    blue.style.border = '0'
}

function entrougreen() { //  entrou no VERDE
    geral.style.backgroundColor = 'green'
    green.style.border = '1px ridge white'
    geral.style.border = '1px ridge white'
}

function saiugreen() { //  saiu do VERDE
    geral.style.backgroundColor = 'white'
    green.style.border = '0'
}

function clicoured() {
    body.style.backgroundColor = 'red'
}

function clicoublue() {
    body.style.backgroundColor = 'blue'
}

function clicougreen() {
    body.style.backgroundColor = 'green'
}