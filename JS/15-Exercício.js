// Variável para controlar a execução do loop
var continuar = 1
// Variável para armazenar a soma das notas
var soma = 0

// Loop que irá perguntar ao usuário para digitar notas enquanto a variável 'continuar' for igual a 1
while (continuar == 1){
    // Pergunta ao usuário para digitar uma nota
    var nota = parseInt(prompt("Digite uma nota"))
    // Soma a nota atual à soma atual
    soma = soma + nota


    // Pergunta ao usuário se deseja continuar digitando notas
    continuar = parseInt(prompt("Deseja continuar? 1 para sim e 0 para não"))
}
// Exibe a soma das notas digitadas na página
document.write("A soma das notas digitadas é: " + soma)

