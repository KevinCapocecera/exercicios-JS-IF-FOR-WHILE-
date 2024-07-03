//Solicita a idade do usuário e a armazena na variável idade
var idade = parseInt(prompt("Digite sua idade"))

//Verifica se a idade é maior ou igual a 18
if (idade >= 18){
//Se verdadeiro, exibe a mensagem "Você é maior de idade"
    document.write("Você é maior de idade")
}else if (idade < 18){
//Se falso, exibe a mensagem "Você é menor de idade"
    document.write("Você é menor de idade")
}
