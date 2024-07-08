const opcoes = {
    1 : {nome : 'pedra ',img : 'img/pedra.png', pedra: 'EMPATE', papel: 'PERDEUL',tesoura: 'VENCEU'},
    2 : {nome : 'papel ',img : 'img/papel.png', pedra: 'VENCEU', papel: 'EMPATE',tesoura: 'PERDEUL'},
    3 : {nome : 'tesoura ',img : 'img/tesoura.png', pedra: 'PERDEUL', papel: 'VENCEU',tesoura: 'EMPATE'}
}

let escolhaJogador = {}
let escolhaComputador = {}

function escolherJogada(num){
    escolhaJogador= opcoes[num]
}

let numComp = Math.floor((Math.random()*3)+1)

escolhaComputador = opcoes[numComp]