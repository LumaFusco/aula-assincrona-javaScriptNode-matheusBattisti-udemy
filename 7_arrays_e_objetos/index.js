/*  ************** PARTE 1 ************** */
console.log("------ PARTE 1 ------")

let numbers = ["primeiro", 5, 64, "luma", false, "last one"];

console.log("Imprimindo o primeiro Array: " + numbers);
console.log("Imprimindo o primeiro índice do Array: " + numbers[0]);
console.log("Imprimindo o útlimo índice do Array: " + numbers[numbers.length - 1]);


/*  ************** PARTE 2 ************** */
console.log("------ PARTE 2 ------")

let nome = ["Luma Fusco Conde de Oliveira"];
let numeros = [23, 06, 1988];

console.log(nome.length);
console.log(numeros.length);
console.log(numeros[`length`]);


/*  ************** PARTE 3 ************** */
console.log("------ PARTE 3 ------")

let marca = 'Nike';

console.log(typeof marca.toUpperCase); //note que é uma função!
console.log(marca.toUpperCase());
console.log(marca.toLocaleLowerCase());

/*  ************** PARTE 5 ************** */
console.log("------ PARTE 5 ------")

let cliente = {
    nome: "Luma",
    idade: 23,
    cadastro: true,
};

console.log(cliente);

/*  ************** PARTE 6 ************** */
console.log("------ PARTE 6 ------")

let pessoa = {
    nome: "Lorena",
    idade: 1.6,
    apelido: "Loli",
};

console.log(pessoa); //original
console.log(pessoa.apelido); //propriedade original
delete pessoa.apelido; //deletando propriedade
console.log(pessoa); //confirmando que deletou
console.log(pessoa.apelido);  //confirmando que deletou
pessoa.genero = "feminino"; //adicionando
console.log(pessoa); //confirmando adicionado


/*  ************** PARTE 7 ************** */
console.log("------ PARTE 7 ------")

let carro = {
    nome: "Nivus",
}

let adicionais = {
    bancoCouro: true,
    Ano: 2027,
}

Object.assign (carro, adicionais);

console.log(carro);

/*  ************** PARTE 8 ************** */
console.log("------ PARTE 8 ------")

let exemplo = {
    essachave1: "teste",
    essachave2: "teste2"
};

console.log(Object.keys(exemplo));


/*  ************** PARTE 9 ************** */
console.log("------ PARTE 9 ------")

let pessoaA = {
    nome: "Matheus",
};

let pessoaB = pessoaA;
console.log(pessoaB);

pessoaB.nome = "Luma";
console.log(pessoaB);

console.log(pessoaA);


/*  ************** PARTE 10 ************** */
console.log("------ PARTE 10 ------")

let exemploLoopComFor = ["luma", "leonardo", "lorena"];

for (let i = 0; i <= exemploLoopComFor.length; i++) {
    console.log(exemploLoopComFor[i]);
}; 


/*  ************** PARTE 11 ************** */
console.log("------ PARTE 11 ------")

let familia = ["beth", "jose", "hellyen"];
console.log(familia);

let semHellyen = familia.pop();
console.log(semHellyen);

console.log(familia);

let comLorena = familia.push("Lorena");
console.log(familia);


/*  ************** PARTE 12 ************** */
console.log("------ PARTE 12 ------")

let emCasa = ["luma", "leo", "lorena"];
console.log(emCasa);

let semLuma = emCasa.shift();
console.log(emCasa);

let comNonos = emCasa.unshift("nona", "nono");
console.log(emCasa);
console.log(emCasa[0], emCasa[1]);


/*  ************** PARTE 13 ************** */
console.log("------ PARTE 13 ------")

let cores = ["amarelo", "azul", "verde", "laranja", "amarelo", "marrom"];

console.log(cores.indexOf("marrom"));
console.log(cores.lastIndexOf("amarelo"));


/*  ************** PARTE 14 ************** */
console.log("------ PARTE 14 ------")

let fruta = ["maça", "banana", "uva", "morango", "melancia"]

console.log(fruta.slice(1,3)); //slice com inicio e final explicito
console.log(fruta.slice(2)) //slice com apenas inicio indicado
console.log(fruta.slice(-1)) //slice com apenas inicio indicado


/*  ************** PARTE 15 ************** */
console.log("------ PARTE 15 ------")

let carros = ["nivus", "mercedes", "corolla"];

carros.forEach(carro =>{
    console.log("o carro é " + carro)
});



/*  ************** PARTE 16 ************** */
console.log("------ PARTE 16 ------")

let verduras = ["alface", "chuchu", "cebola"];

console.log(verduras.includes("alface"));

let teste = "chuchu";

if (verduras.includes(teste)) {
    console.log("inclui");
} else{
    console.log("não inclui");
}


/*  ************** PARTE 17 ************** */
console.log("------ PARTE 17 ------")

console.log(verduras.reverse());



/*  ************** PARTE 18 ************** */
console.log("------ PARTE 18 ------")

let texto = " \n teste \n";

let textoCorrido = texto.trim();

console.log(textoCorrido);


/*  ************** PARTE 19 ************** */
console.log("------ PARTE 19 ------")

let milAoContratio = "1";
console.log(milAoContratio.padStart(4, "0"));



/*  ************** PARTE 20 ************** */
console.log("------ PARTE 20 ------")

let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" "); //separador é o espaço
console.log(palavras);


let variados = "banana;maça;pera;tapete;luma";
let cadaUm = variados.split(";"); //separador é o ponto e vírgula
console.log(cadaUm);


/*  ************** PARTE 21 ************** */
console.log("------ PARTE 21 ------")

let frase2 = "Testando o join";
let palavras2 = frase2.split(" "); //separador é o espaço
let novaFrase = palavras2.join("@");
console.log(novaFrase);



/*  ************** PARTE 22 ************** */
console.log("------ PARTE 22 ------")

let music = "Bohemian Rapsody ";

console.log(music.repeat(5));


/*  ************** PARTE 23 ************** */
console.log("------ PARTE 23 ------")

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
console.log("pausa");
imprimirNumeros(num2, num3);
console.log("pausa");
imprimirNumeros(2,6,32,5487,23,25,36653,12);




/*  ************** PARTE 24 ************** */
console.log("------ PARTE 24 ------")

const person = {
    name: "Lucy",
    sobrenome: "doe"
};

const {name: fname, sobrenome: lname} = person;

console.log(fname);
console.log(lname);



/*  ************** PARTE 25 ************** */
console.log("------ PARTE 25 ------")

let favoriteNames = ["luma", "lorena", "leo"];

let [nomeA, nomeB, nomeC] = favoriteNames;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);















/*  ************** EXERCÍCIOS ************** */


console.log("------ EXERCÍCIOS QUE PRECISEI DE AJUDA PARA RESOLVER. ------")

console.log("------ Como deletar e inserir objetos em um array ------")

let onibus = {
rodas: 8,
limitePassageiros: 40,
portas: 2,
}
console.log(onibus);

delete onibus.rodas;
console.log(onibus);

onibus.janela = 20;
console.log(onibus);



console.log("------ Usando Array como Argumentos ------") 

let num4 = [1, 2, 3, 4, 5, 6, 7];
let num5 = [1, 2, 3];

function verificaTamanho (arr){
    if (arr.length > 5){
        console.log("array grande");
    } else {
        console.log("array pequeno");
    }
}

verificaTamanho(num4);
verificaTamanho(num5);

