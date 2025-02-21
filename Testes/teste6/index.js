const pessoa1 = {
    nome: 'Lorenzo',
    sobrenome: 'Simões Vargas',
    idade : 18,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está dando oi. Minha idade é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++
    },
};

pessoa1.fala();
pessoa1.incrementaIdade()

pessoa1.fala();
pessoa1.incrementaIdade()

pessoa1.fala();
pessoa1.incrementaIdade()

pessoa1.fala();
pessoa1.incrementaIdade()




const livro = {
    titulo : 'Os três porquinhos',
    autor : 'Joseph Jacobs',
    anoDePubliCacao: 1933,

    fala() {
        console.log(`O LIVRO É ${this.titulo}, ele foi feito por ${this.autor} e o ano de publicação dele é ${this.anoDePubliCacao}`);
    }
    
};

livro.fala();


const pessoas = {
    nome: 'Lorenzo',
    idade: '18',
    cidade: 'Joinville',

    propriedades() {
        console.log(`${this.nome} , ${this.idade}, ${this.cidade}`)
    }
};


pessoas.Propriedades();



const produto = {
    nome: 'Arroz',
    preco: 20.00,
    estoque : 50,

    mercado(){
        this.preco = 15;
        console.log(`${this.nome} , ${this.preco} , ${this.estoque}`)
    }
};

produto.mercado();




const carro = {
    ano: 2006,
    cor: 'cinza',
    modelo: 'Versa',
    marca: 'Nissan',


    tela(){
        console.log(`O ano do carro é ${this.ano}, sua cor é ${this.cor}, seu modelo é ${this.modelo},sua marca é ${this.marca}`);
    }

    
};

carro.tela()




const caes = {
    nome: 'Stap',
    raca: 'Goldador',
    idade: 3,

    caoTela(){
        console.log(`O nome do cachorro é ${this.nome}, sua raça é ${this.raca} e sua idade é de ${this.idade}`)
    }
};

caes.caoTela();

