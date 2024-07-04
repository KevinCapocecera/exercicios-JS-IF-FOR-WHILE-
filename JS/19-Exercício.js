// Varíavel para armazenar o menor número digitado
var menor = Infinity

// Variável para controlar a execução do loop
var continuar = 0

// Loop para perguntar ao usuário para digitar números enquanto a variável 'continuar' for igual a 0
while(continuar == 0){
    // Solicita ao usuário que digite um número
    var num = parseInt(prompt("Digite um número"))

    // Verifica se o número é menor que o menor número encontrado
    if (num < menor){
        // Se for, atualiza o menor número encontrado
        menor = num
    }

    // Solicita ao usuário se deseja continuar digitando números
    continuar = parseInt(prompt("Deseja continuar? 0 para sim e 1 para não"))
}

// Exibe o menor número digitado na página
document.write("O menor número digitado foi " + menor)
