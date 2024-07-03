// Pedimos ao usuário para digitar um número
var fatorial = parseInt(prompt("Digite um numero"))

// Armazenamos o número digitado em uma variável
var numeroDigitado = fatorial

// Iniciamos um loop que irá calcular o fatorial do número digitado
for(var i = fatorial; i > 1; i--){
    // Multiplicamos o fatorial pelo valor anterior ao decremento do contador
    // O fatorial é definido como o próprio número digitado no início do loop
    fatorial = fatorial * (i - 1)
}

// Mostramos o resultado na tela
document.write("O fatorial de " + numeroDigitado + " é " + fatorial)
