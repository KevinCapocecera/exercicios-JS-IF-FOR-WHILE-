
// Calcula a soma dos números positivos e negativos

// Declaração das variáveis
var num = 0; // Número digitado pelo usuário
var soma1 = 0; // Soma dos números positivos
var soma2 = 0; // Soma dos números negativos
var continuar = 0; // Variável de controle do loop

// Loop para solicitar números ao usuário
while(continuar == 0){
    // Solicita ao usuário que digite um número
    num = parseInt(prompt("Digite um número"));
    
    // Verifica se o número é positivo
    if(num > 0){
        // Se positivo, soma ao acumulador de números positivos
        soma1 = soma1 + num;
    } else if(num < 0){
        // Se negativo, soma ao acumulador de números negativos
        soma2 = soma2 + num;
    }
    
    // Solicita ao usuário se deseja continuar
    continuar = parseInt(prompt("Deseja continuar? 0 para sim e 1 para não"));
}

// Exibe o resultado na tela
document.write("A soma dos números positivos foi: " + soma1 + "<br>" + "A soma dos números negativos foi: " + soma2);
