// Solicita ao usuário que digite um número
var numero = parseInt(prompt("Digite um numero"))

// Inicia um loop para calcular a tabuada do número digitado
for(let num = 0; num <= 10; num++){ // O loop começa em 0 e vai até 10
    // Exibe na tela a tabuada do número digitado
    document.write(numero + " x " + num + " = " + (numero * num) + "<br>")
    
} // Fim do loop for
