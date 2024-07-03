var continuar = 1
var soma = 0

while (continuar == 1){
    var nota = parseInt(prompt("Digite uma nota"))
    soma = soma + nota


    continuar = parseInt(prompt("Deseja continuar? 1 para sim e 0 para não"))
}
document.write("A soma das notas digitadas é: " + soma)

