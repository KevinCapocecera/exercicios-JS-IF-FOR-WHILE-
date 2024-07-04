// Código para calcular e exibir os primeiros números pares de um número digitado pelo usuário

// Pedir ao usuário para digitar um número
var numero = parseInt(prompt("Digite um número"));

// Criar uma variável para armazenar os resultados
var resultado = '';

// Loop para calcular e concatenar os números pares
for(var i = 1; i <= numero; i++){
    // Calcular o número par e adicionar à variável resultado
    resultado = resultado + (2 * i) + "<br>";
}

// Exibir os resultados
document.write("Os primeiros " + numero + " números pares são: <br>" + resultado);
