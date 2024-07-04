// Loop para perguntar ao usuário para digitar um número até ele digitar "0"
var continuar = 0; // Inicializa a variável de controle do loop
var maior = 0; // Inicializa a variável que armazenará o maior número

// Loop para obter a entrada do usuário
while(continuar == 0){
    // Solicita ao usuário que digite um número
    var numero = parseInt(prompt("Digite um número"));

    // Verifica se o número é maior que o maior número encontrado
    if (numero > maior){
        // Se for, atualiza o maior número encontrado
        maior = numero;
    }

    // Solicita ao usuário se ele deseja continuar ou não
    continuar = parseInt(prompt("Deseja continuar? 0 para sim e 1 para não"));
}  

// Exibe o maior número digitado
document.write("O maior número digitado foi: " + maior);
