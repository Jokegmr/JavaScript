const nome1 = prompt('Escreva seu Nome : ');
alert(`Bem vindo ao formulário ${nome1}`);

function meuEscopo(){
  
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


    function meuEvento(eventos){
        eventos.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
    
       pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade : idade.value
       });
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${idade.value} </p>`;

    }

    
    form.addEventListener('submit', meuEvento);
}

meuEscopo();





