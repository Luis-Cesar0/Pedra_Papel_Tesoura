const opcoes = {
    1 : {nome : 'pedra',img : 'img/pedra.png', pedra: 'EMPATE', papel: 'PERDEU',tesoura: 'VENCEU'},
    2 : {nome : 'papel',img : 'img/papel.png', pedra: 'VENCEU', papel: 'EMPATE',tesoura: 'PERDEU'},
    3 : {nome : 'tesoura',img : 'img/tesoura.png', pedra: 'PERDEU', papel: 'VENCEU',tesoura: 'EMPATE'}
}
//Botões de escolha
let btnEscolha = document.querySelectorAll('.btnJogada')

//escolhar do usuario
let imgJogador = document.querySelector('#imgUser')
let esUsuario = document.querySelector('#escolhaUsuario')

//escolha do computador
let imgComputador = document.querySelector('#imgComput')
let esComputador = document.querySelector('#escolhaComputador')

//rasultado final
let resultadoFinal = document.getElementById('resultado')

// contagem pontos 
let contagemPontosComputador = document.querySelector("#pontosComputador")
let contagemPontosjogador = document.querySelector("#pontosUsuario")

// variaveis globais para escolha do usário e computador
let escolhaJogador = {}
let escolhaComputador = {}

// ariaveis globais para pontuação dos jogadores
let pontosJogador = 0
let pontosComputador = 0

function escolherJogada(num){
    return opcoes[num]
}

function montarJogadas(numJogador) {
    let numComp = Math.floor((Math.random()*3)+1)

    escolhaJogador= escolherJogada(numJogador)
    escolhaComputador= escolherJogada(numComp)
    
}

function avaliarGanhador(){
    if (escolhaJogador[escolhaComputador.nome] == 'VENCEU') {
        
        pontosJogador += 1
        
    }else if(escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
        
        pontosComputador += 1
        
    }

    
}
function montarTela(){
    imgJogador.src = escolhaJogador.img
    imgComputador.src = escolhaComputador.img

    imgJogador.alt = escolhaJogador.nome
    imgComputador.alt = escolhaComputador.nome

    esUsuario.innerHTML = `Jogador ${escolhaJogador.nome}`
    esComputador.innerHTML = `Computador ${escolhaComputador.nome}`

    contagemPontosComputador.innerHTML = pontosComputador
    contagemPontosjogador.innerHTML = pontosJogador

    resultadoFinal.innerHTML= escolhaJogador[escolhaComputador.nome]

    // adição da classe para manipulação do style
    switch (escolhaJogador[escolhaComputador.nome]) {
        case 'VENCEU':
            resultadoFinal.classList= 'ganhou'
            break;
        case 'PERDEU':
            resultadoFinal.classList= 'perdeu'
            break;
    
        default:
            resultadoFinal.classList = 'empatou'
            break;
    }


}

function jogar(num){
    montarJogadas(num)
    avaliarGanhador()
    montarTela()

}



btnEscolha.forEach(element => {
    element.addEventListener('click',()=>{
        jogar(element.value)
    })
});




