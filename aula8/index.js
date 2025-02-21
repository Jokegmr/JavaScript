const nome = 'Lorenzo';
const sobrenome = 'Simões Vargas';
const idade = 18;
const peso = 63;
const altura = 1.74;

let imc; // peso / (altura * altura)
imc = peso / (altura * altura);

let anoNascimento;
anoNascimento = 2006;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} KG tem ${altura} de altura e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}`);