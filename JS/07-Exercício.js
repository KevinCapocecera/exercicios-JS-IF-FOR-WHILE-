// Solicita ao usuário que digite um número
var numero = parseInt(prompt("Digite um numero")) 

// Verifica se o número é divisível por 3 e por 5
if(numero % 3 == 0 && numero % 5 == 0){
    // Exibe uma mensagem informando que o número é divisível por 3 e por 5
    document.write("O numero " + numero + " é divisível por 3 e por 5")
}else{
    // Exibe uma mensagem informando que o número não é divisível por 3 e por 5
    document.write("O numero " + numero  + " não é divisível por 3 e por 5")
}
