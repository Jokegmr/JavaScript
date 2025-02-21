/*Teste 3 */

let nome = prompt('Digite seu nome aqui: ');
document.body.innerHTML += ` Esse é meu noome : <strong> ${nome} </strong> <br>`;

document.body.innerHTML += ` Índice : ${nome.indexOf('z')} <br>`;

document.body.innerHTML += `A sua terceira letra é : ${nome[3]} <br>` ;

document.body.innerHTML += `Seu nome em Mínusculo fica : ${nome.toLocaleLowerCase()} <br> `;  

document.body.innerHTML += `Seu nome maíusculo fica assim : ${nome.toLocaleUpperCase()} <br> `;

document.body.innerHTML += `O tamanho do seu nome é : ${nome.length} <br>`;

document.body.innerHTML += `${nome.split('')}`; // põe virgula em cada letra escrita

alert('Parabéns Você consluiu a sua etapa...')