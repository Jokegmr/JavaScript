function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function meuEvento(eventos){
        eventos.preventDefault();

        const nome = form.querySelector('.nome');
        
        const sobrenome = form.querySelector('.sobrenome');

        const idade = form.querySelector('.idade');

        const altura = form.querySelector('.altura');

        const sexo = form.querySelector('.sexo');

        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            idade:idade.value,
            altura:altura.value,
            sexo:sexo.value

        })

        resultado.innerHTML = `<p> ${nome.value} ${sobrenome.value} ${idade.value} ${altura.value} ${sexo.value}  </p> `;

    }

    form.addEventListener('submit', meuEvento);
}

meuEscopo();







///////////////// chatgpt/////////////////////////////

function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function meuEvento(eventos){
        eventos.preventDefault(); // Evita o envio do formulário

        // Captura os valores dos campos
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const idade = form.querySelector('.idade').value;
        const altura = form.querySelector('.altura').value;
        const sexo = form.querySelector('.sexo').value;

        // Verifica se todos os campos foram preenchidos antes de adicionar ao array
        if (!nome || !sobrenome || !idade || !altura || !sexo) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Adiciona os dados ao array 'pessoas'
        pessoas.push({
            nome,
            sobrenome,
            idade,
            altura,
            sexo
        });

        // Exibe o resultado na tela
        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Altura:</strong> ${altura} cm</p>
            <p><strong>Sexo:</strong> ${sexo}</p>
        `;

        // Torna o resultado visível
        resultado.style.display = 'block'; // Exibe a div de resultado
    }

    // Adiciona o evento de 'submit' ao formulário
    form.addEventListener('submit', meuEvento);
}

meuEscopo();
