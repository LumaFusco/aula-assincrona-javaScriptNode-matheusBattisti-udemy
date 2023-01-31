console.log("------------ 1.2 Métodos ------------")

const cachorro = {
    uivar: function () {
        console.log("Auuuuu");
    },
    rosnar: function () {
        console.log("grrgrgrgrg")
    }
};


cachorro.uivar();
cachorro.rosnar();





console.log("------------ 1.3 Mais sobre Métodos ------------")

const gato = {
    raca: "não definida",
    uivar: function () {
        console.log("Miauuu");
    },
    rosnar: function () {
        console.log("grrgrgrgrg")
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    getRaca: function () {
        return "A raça é " + this.raca;
    }
};

console.log(gato.raca);

gato.setRaca("Siames");

console.log(gato.raca);

console.log(gato.getRaca());

/*outro exemplo*/

const carro = {
    marca: "nivus",
    ligar: function () {
        return console.log("vrruummmm");
    },
    setmarca: function (novamarca) {
        this.marca = novamarca
    },
    getmarca: function () {
        return (this.marca);
    }
};

carro.ligar();
carro.setmarca("Fiat");
console.log(carro.getmarca());






console.log("------------ 1.5 Classes / Prototypes ------------")

let flor = {
    tipo: "não identificado",
    perfumar: function () {
        console.log("cheirosoooo")
    }
};

//criando o prototype Girassol
let girassol = Object.create(flor);

//mudando um valor que já existia no Obejetc
girassol.tipo = "Girassol";
console.log(girassol.tipo);

//usando uma função que já existia no Obejetc
girassol.perfumar();

//confirmando que o Object flor permance existindo
console.log(flor.tipo);


//testando molde novamente
let amelia = Object.create(flor);
amelia.tipo = "amelia";
console.log(amelia.tipo);

console.log("GIRASSOL E AMÉLIA SÃO NOVAS CLASSES")





console.log("------------ 1.6 Classes: construtor por função ------------")

function criarDog(raca, patas, cores) {
    let dog = Object.create({});
    dog.raca = raca;
    dog.patas = patas;
    dog.cores = cores;
    dog.latir = function () {
        console.log("Au Au");
    }
    return dog;
};

let dog = criarDog("vira lata", 4, "caramelo e preto");

let dog2 = criarDog("tomba", 3, "marrom");

console.log(dog, dog2);

dog2.latir();




console.log("------------ 1.7 Classes: construtor por new ------------");


function Professores(nome, materia, idade) {
    this.nome = nome,
        this.materia = materia,
        this.idade = idade
    this.proposito = function () {
        console.log("ensinar")
    }
};

let professoraMatematica = new Professores("Luciana", "matemática", 27);

let professoraIngles = new Professores("Claudia", "ingles", 33);

console.log(professoraMatematica, professoraIngles);





console.log("------------ 1.8 Metodos prototype ------------");


function Professores(nome, materia, idade) {
    this.nome = nome,
        this.materia = materia,
        this.idade = idade
};

Professores.prototype.proposito = function () {
    console.log("ensinar")
}

Professores.prototype.meio = function () {
    console.log("livros")
}


let professoraPortugues = new Professores("Claudia", "ingles", 33);

console.log(professoraPortugues);

professoraPortugues.proposito();
professoraPortugues.meio();





console.log("------------  1.9 Class e constructos do ES6 ------------");

class Macaco {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    macacada() {
        console.log("todos riem");
    }
};


let orangotango = new Macaco("Orangotango", "marrom");
console.log(orangotango);
orangotango.macacada();






console.log("------------   1.9 Class e constructos do ES6 ------------");

class Cliente {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

Cliente.prototype.endereco = "padrão";

let cliente1 = new Cliente("Mariana", "Silva");
console.log(cliente1);
console.log(cliente1.endereco);




console.log("------------   EXERCÍCIO 1 ------------");

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta (1000);
conta.deposito(1000);
console.log(conta.saldo);

conta.saque(20);
console.log(conta.saldo);


console.log("------------   EXERCÍCIO 3 ------------");

class Endereço {
    constructor (rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua) {
        this.rua = novaRua;
    }
}


let novoEndereço = new Endereço ("Gloria", "brooklin", "são paulo", "SP");
console.log(novoEndereço);

novoEndereço.novaRua = "Barão";
console.log(novoEndereço);


console.log("------------   EXERCÍCIO 4 ------------");

class Carros {
    constructor (marca, cor, gasolinaRestante){
        this.marca= marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }
    dirigir (litro){
        this.gasolinaRestante -= litro
    }
    abastecer (litro){
        this.gasolinaRestante += litro
    }
   };

   let veiculo = new Carros("VW", "azul", 100)
   veiculo.dirigir(20);
   console.log(veiculo);

   veiculo.abastecer(200);
   console.log(veiculo);


