
var numero = parseInt(prompt("Tente adivinhar um número de 1 a 100"))
var numeroOculto = Math.floor(Math.random() * 100)
var continuar = 0


while(numero != numeroOculto && continuar == 0){

    alert("Errou kkkk")
    continuar = parseInt(prompt("Deseja continuar? 0 para sim e 1 para não"))
    numero = parseInt(prompt("Tente outra vez"))
    
}
document.write("Parabéns, você acertou!")
