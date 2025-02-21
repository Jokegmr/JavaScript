let nome = prompt('Qual o seu nome completo: ');

document.body.innerHTML += `O seu nome é: <strong> ${nome} </strong> <br/>`;

document.body.innerHTML += `Seu nome tem quantas letras? : ${nome.length}  <br/>`;


 document.body.innerHTML += `A segunda letra do seu nome é : ${nome[1]} <br/> `;

document.body.innerHTML += `Qual é o primeiro índice da letra L no seu nome? : ${nome.lastIndexOf('n')} <br/> `;

document.body.innerHTML += `Qual o último índice letra Z do seu nome ? : ${nome.lastIndexOf('z')}<br/> `;

document.body.innerHTML += `As últimas 3 letras do seu nome são : ${nome.slice(4)}  <br/>`;

document.body.innerHTML += `As palavras do seu nome são : ${nome.split('')}  <br/>`;

document.body.innerHTML += `Seu nome com letra maiúscula : ${nome.toUpperCase()} <br/>`;

document.body.innerHTML += `Seu nome com letra minúscula : ${nome.toLocaleLowerCase()}  <br/>`;



