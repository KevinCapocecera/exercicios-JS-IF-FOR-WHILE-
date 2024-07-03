// Esta linha pede ao usuário para digitar um número
var numero = parseInt(prompt("Digite um numero"))

// Verifica se o número está entre 10 e 20
if (numero >= 10 && numero <= 20){
        // Exibe uma mensagem informando que o número está entre 10 e 20
        document.write("O número " + numero + " está entre 10 e 20")
}else{
    // Exibe uma mensagem informando que o número não está entre 10 e 20
    document.write("O número " + numero + " não está entre 10 e 20")
}

