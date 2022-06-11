let mensagem = document.getElementById('escolha')
let pedra = document.getElementById('pedra')
    pedra.addEventListener('mouseenter', escolherPedra)
    pedra.addEventListener('click', jogarPedra)
    pedra.addEventListener('mouseleave', sair)
    
let papel = document.getElementById('papel')
    papel.addEventListener('mouseenter', escolherPapel)
    papel.addEventListener('click', jogarPapel)
    papel.addEventListener('mouseleave', sair)

let tesoura = document.getElementById('tesoura')
    tesoura.addEventListener('mouseenter', escolherTesoura)
    tesoura.addEventListener('click', jogarTesoura)
    tesoura.addEventListener('mouseleave', sair)

function escolherPedra() {
    mensagem.innerHTML = "<p>PEDRA</p><p>🏆 Ganha de tesoura</p><p>💣Perde para papel</p>"

}

function escolherPapel() {
    mensagem.innerHTML = "<p>PAPEL</p><p>🏆 Ganha de pedra</p><p>💣Perde para tesoura</p>"
    
}

function escolherTesoura() {
    mensagem.innerHTML = "<p>TESOURA</p><p>🏆 Ganha de papel </p><p>💣Perde para pedra</p>"
    
}

function sair() {
    
    mensagem.innerHTML = '<p>Qual você escolhe?</p>'
    
}


function jogarPedra() {
    let player2 = document.getElementById('player2')
    let p2_msg = document.getElementById('p2_msg')
    let p2 = jogada(1,3)
    
function jogada(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    if(p2 == 1) {
        player2.innerHTML = `😹`
        p2_msg.innerHTML = 'Eu escolhi &#x270A<br/>Parece que temos um empate! '
    } else if (p2 == 2) {
        player2.innerHTML = `😻`
        p2_msg.innerHTML = 'Eu escolhi &#x1F590 <br/>💣Eu ganhei!💣'
    } else {
        player2.innerHTML = `🙀`
        p2_msg.innerHTML = 'Eu escolhi &#x270C <br/>🏆Você ganhou!🏆'
    }
}

function jogarPapel() {
    let player2 = document.getElementById('player2')
    let p2_msg = document.getElementById('p2_msg')
    let p2 = jogada(1,3)
    
function jogada(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    if(p2 == 1) {
        player2.innerHTML = `😹`
        p2_msg.innerHTML = 'Eu escolhi &#x1F590<br/>Parece que temos um empate! '
    } else if (p2 == 2) {
        player2.innerHTML = `😻`
        p2_msg.innerHTML = 'Eu escolhi &#x270C <br/>💣Eu ganhei!💣'
    } else {
        player2.innerHTML = `🙀`
        p2_msg.innerHTML = 'Eu escolhi &#x270A <br/>🏆Você ganhou!🏆'
    }
}

function jogarTesoura() {
    let player2 = document.getElementById('player2')
    let p2_msg = document.getElementById('p2_msg')
    let p2 = jogada(1,3)
    
function jogada(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    if(p2 == 1) {
        player2.innerHTML = `😹`
        p2_msg.innerHTML = 'Eu escolhi &#x270C<br/>Parece que temos um empate! '
    } else if (p2 == 2) {
        player2.innerHTML = `😻`
        p2_msg.innerHTML = 'Eu escolhi &#x270A <br/>💣Eu ganhei!💣'
    } else {
        player2.innerHTML = `🙀`
        p2_msg.innerHTML = 'Eu escolhi &#x1F590 <br/>🏆Você ganhou!🏆'
    }
}