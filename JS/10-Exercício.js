var fatorial = parseInt(prompt("Digite um numero"))
var numeroDigitado = fatorial

for(var i = fatorial; i > 1; i--){
    fatorial = fatorial * (i - 1)
}

document.write("O fatorial de " + numeroDigitado + " é " + fatorial)
