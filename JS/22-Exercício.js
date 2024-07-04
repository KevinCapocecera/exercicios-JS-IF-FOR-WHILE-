// Iniciando a variável de senha correta
var senha = 1234;

// Solicitando ao usuário a digitação da senha
var senhaDigitada = parseInt(prompt("Digite sua senha"));

// Laço de repetição para validar a senha digitada
// Enquanto a senha digitada for diferente da senha correta, o usuário será solicitado a digitar novamente
while(senha != senhaDigitada){
    // Solicitando ao usuário a digitação de senha caso a senha digitada seja inválida
    senhaDigitada = parseInt(prompt("Senha inválida. Digite novamente"));
}

// Exibindo a mensagem de senha correta na página
document.write("Senha correta");

