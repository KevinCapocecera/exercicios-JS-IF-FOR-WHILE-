var a = parseInt(prompt("Digite um lado do triangulo"))
var b = parseInt(prompt("Digite um lado do triangulo"))
var c = parseInt(prompt("Digite um lado do triangulo"))

if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
    document.write("O triangulo e um retangulo")

}else if (a*a > b*b + c*c || b*b > a*a + c*c || c*c > a*a + b*b){
    document.write("O triangulo e um obtuso")

}else if (a*a < b*b + c*c || b*b < a*a + c*c || c*c < a*a + b*b){
    document.write("O triangulo e um acutangulo")

}
