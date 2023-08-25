let n_jogada = 0;
        
let tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
];

let mensagemStatus = document.querySelector(".mensagem-status")
let statusJogo = document.querySelector(".status-jogo")

function checar_vencedor(tabuleiro) {
    // Verifica as linhas
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i].every(element => element === "X") ||
        tabuleiro[i].every(element => element === "O")) {
            return true;
        }
    }

    // Verifica as colunas
    for (let j = 0; j < tabuleiro.length; j++) {
        let columnElements = [];
        for (let i = 0; i < tabuleiro.length; i++) {
            columnElements.push(tabuleiro[i][j]);
        }
        if (columnElements.every(element => element === 'X') || 
        columnElements.every(element => element === 'O')) {
            return true;
        }
    }

    // Verifica a diagonal principal
    if (tabuleiro.every((row, index) => row[index] === "X") || 
    tabuleiro.every((row, index) => row[index] === "O")) {
        return true;
    }

    // Verifica a diagonal secundária
    if (tabuleiro.every((row, index) => row[tabuleiro.length - 1 - index] === "O" || 
    tabuleiro.every((row, index) => row[tabuleiro.length - 1 - index] === "X"))) {
        return true;
    }

    return false;
}   


function jogada(self){
    if (self.innerHTML !== ''){
        return;
    }
    const row = self.id[0];
    const col = self.id[1];


    if(!checar_vencedor(tabuleiro)){
        if (self.innerHTML == '')
        if (n_jogada%2 == 0){
            self.innerHTML = "X";
            self.style.color = "blue";
            mensagemStatus.style.color = "red";
            mensagemStatus.innerHTML = "Vez de O" 
            tabuleiro[row][col] = "X";
        }
        else{
            self.innerHTML = "O";
            self.style.color = "red";
            mensagemStatus.style.color = "blue";
            mensagemStatus.innerHTML = "Vez de X"
            tabuleiro[row][col] = "O";
        }
            
        n_jogada ++;
    }

    let acabou = checar_vencedor(tabuleiro);
    
    if(acabou || n_jogada === 9){
        if(n_jogada === 9){
            mensagemStatus.style.color = "red";
            mensagemStatus.innerHTML = "Deu Velha!";
        } else{
            if (n_jogada%2==0){
                mensagemStatus.style.color = "red";
                mensagemStatus.innerHTML = "O venceu!";
            }
            else{
                mensagemStatus.style.color = "blue";
                mensagemStatus.innerHTML = "X venceu!"

            }
        }
        statusJogo.innerHTML += '<input type="button" value="Jogar Novamente" class="reiniciar-jogo">';
    }
    
    let botao_reiniciar = document.querySelector(".reiniciar-jogo");
        
    botao_reiniciar.addEventListener("click", ()=>{
        window.location.reload();
    })
}