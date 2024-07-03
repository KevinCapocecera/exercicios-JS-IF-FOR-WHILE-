// Esta é uma variável que vai armazenar a soma dos números pares de 1 a 100
var soma = 0

// Este loop percorre os números de 1 a 100 de dois em dois e soma cada número à variável soma
for(var numero = 1; numero <= 100; numero +=2){
    
    // A cada iteração do loop, a variável soma recebe o valor atual mais o número atual
    soma = soma + numero
}

// Aqui a variável soma é exibida na página
document.write(soma)

