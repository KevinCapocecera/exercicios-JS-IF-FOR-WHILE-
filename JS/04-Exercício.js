// Pedir ao usuário para digitar um ano
var ano = parseInt(prompt("Digite um ano"))

// Verificar se o ano é bissexto
// Um ano é bissexto se for divisível por 4 e não for divisível por 100, ou se for divisível por 400
if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)){ // uso de parenteses para melhorar a lógica
    // Exibir mensagem informando que o ano é bissexto
    document.write("O ano " + ano + " é bissexto")
}else{
    // Exibir mensagem informando que o ano não é bissexto
    document.write("O ano " + ano + " não é bissexto")
}

