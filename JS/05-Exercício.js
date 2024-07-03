// Solicita os lados do triângulo ao usuário
var a = parseInt(prompt("Digite um lado do triângulo"))
var b = parseInt(prompt("Digite um outro lado do triângulo"))
var c = parseInt(prompt("Digite o último lado do triângulo"))

// Verifica se o triângulo é retângulo
if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
    document.write("O triângulo é um retângulo")

// Verifica se o triângulo é obtusângulo
}else if (a*a > b*b + c*c || b*b > a*a + c*c || c*c > a*a + b*b){
    document.write("O triângulo é um obtusângulo")

// Verifica se o triângulo é agudo
}else if (a*a < b*b + c*c || b*b < a*a + c*c || c*c < a*a + b*b){
    document.write("O triângulo é um agudo")
}