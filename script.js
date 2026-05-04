// O nosso tabuleiro 3x3
let tabuleiro = [
    ["", "", ""], // Linha 0
    ["", "", ""], // Linha 1
    ["", "", ""]  // Linha 2
];

let jogadorAtual = "X"; // O jogo começa sempre com o X


function fazerJogada(linha, coluna) {
    // 1. Verificar se a posição na matriz já está ocupada
    if (tabuleiro[linha][coluna] !== "") {
        alert("Esta posição já está ocupada! Escolhe outra.");
        return; // Para a função aqui
    }

    // 2. Gravar o "X" ou "O" na matriz, na linha e coluna corretas
    tabuleiro[linha][coluna] = jogadorAtual;

    // 3. Atualizar o HTML para mostrar o X ou O na tela
    atualizarTela();
    
    // Verificar se alguém ganhou
    verificarVencedor();

    // 4. Alternar o jogador (Se era X, vira O. Se era O, vira X)
    if (jogadorAtual === "X") {
        jogadorAtual = "O";
    } else {
        jogadorAtual = "X";
    }

    // Atualizar a mensagem na tela
    document.getElementById("mensagem").innerText = "Vez do jogador: " + jogadorAtual;
}

function verificarVencedor() {
    // Verificar as 3 linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" &&
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][1] === tabuleiro[i][2]) {
            alert("O jogador " + tabuleiro[i][0] + " GANHOU!");
            return;
        }
    }
    
    // Verificar as 3 colunas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[0][i] !== "" &&
            tabuleiro[0][i] === tabuleiro[1][i] &&
            tabuleiro[1][i] === tabuleiro[2][i]) {
            alert("O jogador " + tabuleiro[0][i] + " GANHOU!");
            return;
        }
    }
    
    // Verificar diagonal principal [0][0], [1][1], [2][2]
    if (tabuleiro[0][0] !== "" &&
        tabuleiro[0][0] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][2]) {
        alert("O jogador " + tabuleiro[0][0] + " GANHOU!");
        return;
    }
    
    // Verificar diagonal secundária [0][2], [1][1], [2][0]
    if (tabuleiro[0][2] !== "" &&
        tabuleiro[0][2] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][0]) {
        alert("O jogador " + tabuleiro[0][2] + " GANHOU!");
        return;
    }
}

function atualizarTela() {
    // Pegamos todas as divs que têm a classe 'celula'
    const celulas = document.getElementsByClassName("celula");
    let indice = 0;

    // Percorremos a nossa matriz para atualizar o visual
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            // Colocamos o valor da matriz ("X", "O" ou "") dentro da div correspondente
            celulas[indice].innerText = tabuleiro[l][c];
            indice++;
        }
    }
}