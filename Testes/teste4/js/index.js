const numero1 = Number(prompt('Digite um número: ')); 
const numero = document.getElementById('numero');
const texto = document.getElementById('texto');


numero.innerHTML = numero1;

texto.innerHTML = `<p>A raiz quadrada de ${numero1} é :  ${numero1 ** 0.5} </p> `;

texto.innerHTML += `<p> ${numero1 }  É inteiro: ${ Number.isInteger(numero1) } `;

texto.innerHTML += `<p> É ${Number.isNaN(numero1)} <p/>`;

texto.innerHTML += `<p> Arredonda o número para cima : ${Math.ceil(numero1)} </p>`;

texto.innerHTML += `<p> Arredonda o número para baixo : ${Math.floor(numero1)} </p>`;

texto.innerHTML += `Com duas casas decimais : ${numero1.toFixed(2)}`; 
