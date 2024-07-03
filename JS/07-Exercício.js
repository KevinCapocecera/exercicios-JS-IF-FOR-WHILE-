
var numero = parseInt(prompt("Digite um numero")) 

if(numero % 3 == 0 && numero % 5 == 0){
    document.write("O numero " + numero + " é divisível por 3 e por 5")
}else{
    document.write("O numero " + numero  + " não é divisível por 3 e por 5")
}
