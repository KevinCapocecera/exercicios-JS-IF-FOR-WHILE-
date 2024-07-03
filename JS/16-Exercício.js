// Este é um jogo de adivinhação onde o usuário precisa adivinhar um número de 1 a 100.

// Pedir ao usuário para digitar um número
var numero = parseInt(prompt("Tente adivinhar um número de 1 a 100"))

// Gerar um número aleatório de 1 a 100 para o usuário tentar adivinhar
var numeroOculto = Math.floor(Math.random() * 100)

// Variável para controlar a execução do loop
var continuar = 0

// Loop que irá perguntar ao usuário para digitar um número até ele acertar ou decidir parar
while(numero != numeroOculto && continuar == 0){

    // Exibir uma mensagem informando que o usuário errou
    alert("Errou kkkk")

    // Pedir ao usuário se deseja continuar tentando adivinhar o número
    continuar = parseInt(prompt("Deseja continuar? 0 para sim e 1 para não"))

    // Pedir ao usuário para digitar outro número
    numero = parseInt(prompt("Tente outra vez"))
    
}

// Exibir uma mensagem de parabéns quando o usuário acertar o número
document.write("Parabéns, você acertou!")

