/*Lorenzo*/
const nome1 = 'Lorenzo';
const sobrenome1 = 'Vargas';
const idade1 = 18;
const alturaM1 = 1.74;
const peso1 = 63;
let imc1;
imc1 = peso1 / (alturaM1 * alturaM1);


/* Victória*/
const nome2 = 'Victória';
const sobrenome2 = 'Luz';
const idade2 = 17;
const alturaM2 = 1.54;
const peso2 = 46;
let imc2;
imc2 = peso2 / (alturaM2 * alturaM2);

/*Contadores*/
let contador1 = 1;
let contador2 = 1;

contador1 += idade1;
contador2 += idade2;





console.log(`Meu nome é ${nome1}, mas me chamam de ${sobrenome1}. Eu tenho ${idade1} anos de idade e estou estudando progrmação ultimamente , minha altura é de ${alturaM1}, meu peso é de ${peso1}KG e meu IMC é de ${imc1}. Minha namorada se chama ${nome2} mas eu chamo ela de ${sobrenome2}, ela tem ${idade2} anos e está estudando Análise e Desenvolvimento De Sistemas, ela tem a altura de ${alturaM2} e seu peso é de ${peso2} KG , e seu IMC é de ${imc2}.
    
    
    `); 

console.log(`E daqui a um ano eu terei ${contador1} anos e a Vi ${contador2} anos`)








 

.inicio{
    text-align: center;
    min-width: 300px;
    min-height: 100px;
    width: 100%;
    height: auto;
    background-color: rgba(119, 21, 70, 0.747);
    border: 1px solid black;
    border-radius: 5px;
    
    padding: 20px; 
    margin: 20px 0; 
}

.meio{
text-align: center;
background-color: rgba(119, 21, 70, 0.747);
min-width: 300px;
max-height: 400px;
width: 100%;
height: auto;
border: 1px solid black ;
border-radius: 5px;

padding: 20px; 
margin: 20px 0; 
}

.resultado{

    text-align: center;
    min-width: 100px;
    max-height: 200px;
    height: auto;
    width: 50%; 
    
    background-color: rgba(0, 0, 0, 0.836);
    color: rgb(192, 5, 167);

    margin:  auto; 
    padding: 2px; 
    border-radius: 10px; 
    box-shadow: 0 10px 30px rgba(161, 3, 3, 0.1); 

    
}

button {
    margin-bottom: 10px;
}