// Solicita ao usuário que digite um número
var numero = parseInt(prompt("Digite um número")) // Armazena o número digitado no variável numero

// Variável para contar os divisores do número
var contadorDivisores = 0 // Inicializa a variável com o valor 0

// Loop que irá verificar se cada número de 0 até o número digitado é divisor do número
for (var i = 0; i <= numero; i++){ // Inicializa o loop com o valor de 0 e vai até o número digitado
    if (numero % i == 0){ // Verifica se o resto da divisão do número pelo loop é igual a 0
        contadorDivisores++ // Se for verdadeiro, incrementa a variável contadorDivisores em 1
    }
}

// Exibe na tela o número e a quantidade de divisores
document.write("O número " + numero + " tem " + contadorDivisores + " divisores")
