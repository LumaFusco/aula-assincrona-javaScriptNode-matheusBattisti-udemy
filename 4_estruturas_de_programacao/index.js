//O que é um programa/software?
// - É um conjunto de declarações (statements)
// - Statments são um conjunto de expressões (expressions)
// - Expressions é todo fragmento de código que produz um valor

// O software tem um objetivo. Os Stratments "guiam" o software para o seu objetivo. Expressions são os valores que os Statements esperam para guiar o software

// Exemplos:
// Statement: console.log(1 > 2);
// Expresion: console.log(`batata`);
// A junção desses conceitos é o objetivo!

//Como salvar os valores na memória?
// - Salvamos os valores em variáveis (isso é um Statement), exemplo: let laranjas = 5;
// - Depois disso podemos criar expressões com esses valores, exemplo: console.log(laranjas * laranjas)  , onde aqui o resultado seria 25.
// - Ainda podemos usar o template literas com esse Statement, exemplo: console.log(`Tem ${laranjas} laranjas na cesta`);

//Podemos tambem MUDAR o valor das variáveis ao longo do programa. Por exemplo: laranjas = laranjas + 1

//Podemos também definir VÁRIAS variáveis através do let. Exemplo:
// let quadrado = 4, traingulo = 3, quadrado = 4;
// console.log(quadrado*(triângulo+ retangulo));



//--- DECLARAÇÃO DE VARIÁVEIS ---//

let nome = "Luma";
let laranja = 3;

console.log(nome);
console.log(`Meu nome é ${nome}`);
console.log(laranja * laranja);


nome = "Leonardo";    ///mudando o valor das variáveis
laranja = 10;

console.log(`Meu nome é ${nome}`);
console.log(laranja * laranja);



laranja = "Lorena";          //mudando o type da variável.

console.log(`Meu nome é ${laranja}`);

// --------- NOTA IMPORTANTE: só é preciso usar o let na primeira vez, depois disso basta colocar o nome da variável o novo valor. Usando o LET é um DECLARAÇÃO; sem o LET é uma ATRIBUIÇÃO.




//--- DECLARAÇÃO DE VÁRIAS VARIÁVEIS DE UMA SÓ VEZ ---//

let um = 1, dois = 2, tres = 3;
console.log(um + dois + tres);



// --- OUTRAS FORMAS DE DECLARAR VALORES ---//
//Além de let, podemos usar var (quase não se usa mais) e const. No const não pode alterar o valor durante o programa. Se uma normalmente LET ou CONST. 

//Como algumas (poucas) páginas ainda não aceitam LET, devemos sempre no início da página criar o o parse. **Procre ler mais sobre!

var luma = "linda";
console.log(`Luma Fusco é ${luma}`);

const ip = "27.0.0.1"
console.log(`O número do IP dessa página é ${ip}`);

luma = "maravilhosa";
console.log(`Luma Fusco é ${luma}`);

//CONST não se pode mudar!



//--- CONVENÇÃO DO NOME DAS VARIÁVEIS ---//

// Os pontos abaixo servem tanto pra LET quanto para VAR
// * não pode começar com número, ex: let 2teste
// * pode terminar com número, ex: let teste2
// * pode usar $ ou _ mas outros caracteres especiais não pode. Ex que pode: $nome e _nome . Ex não pode: @luma
// * pode comcar com letra maiuscula mas é mais correto usar o camelCase como ex: lumaFusco
// * não esquecer que existem palavras reservadas



//-- FUNÇÕES --//

//São blocos de código que nos retornam um valor ou ação

// As funções são chamadas durante o programa. Nós chamamos a função escrevendo o nome dela + abrindo e fechando parênteses. Ex: primeiraFuncao ();

// Podemos inserir parâmetros ou valores para essa função. Existem 3 tipos de funções: as que necessitam obrigatóriamente do parâmetro (ou então não funcionam), as que não exigem e as que  pode ser usado ou não.  Ex: nomeDaFuncao(parametro1, parametro2);




//-- FUNÇÃO BUILT-IN: prompt() --//

//Recebe um input do usuário do sitema e pode guardar esse valor. Como não pode ter layout editado, não costuma ser muito usada. Ex:

//Descomente as duas linhas abaixo para demostração:
//let idade = prompt("Qual a sua idade?");
//console.log(idade);




//-- FUNÇÃO BUILT-IN: alert() --//

//Exibe o parâmetro como alert! Isso trava a navegação pelo mesmo motivo do prompt (porque não se pode alterar o layout) e porque fica muito invasivo ao usuário

//Descomente as duas linhas abaixo para demostração:
//alert("Você está de acordo?");
//console.log(confirmacao);



//-- FUNÇÃO BUILT-IN: Math.x() --//

//Muito utilizada! Utilizada para expressões/cálculos matemáticos. Alguns exemplos de Math abaixo. Mas existem muitas outras!!!

let maiorNumero = Math.max(1, 5, 3, 6);
console.log(maiorNumero);

let menorNumero = Math.min(1, 5, 3, 6);
console.log(menorNumero);

let arredondar = Math.round(5.29651);
console.log(arredondar);

let arredondarParaCima = Math.ceil(5.29651);
console.log(arredondarParaCima);



//-- FUNÇÃO BUILT-IN: console.log() --//

//Exibe uma mensagem na tela com o argumento que passamos.



//-- ESTRUTURAS DE CONTROLE --//

//Como os códigos são lidos de cima para baixo, foram criadas as estrturas de controle para que possamos alterar esses fluxo quando necessário.
// Ou seja, dependendo dos valores de statementes ou expressions, ele tomará um caminho diferente.



//-- ESTRUTURAS DE CONTROLE: IF --//

// iF = SE. Onde algo é a condição imposta por um statement que resulta em um boolean (true ou false). Ex:

let idade = 35;

if (idade > 18) {
    console.log("Pode entrar!")
};


let name = "Luma";

if (idade > 20 && name == "Luma") {   //If + operador lógico AND
    console.log("Bem vinda!")
};



//-- ESTRUTURAS DE CONTROLE: Else --//

// Else: caso o IF não seja atendido.

let fruta = "morango";

if (fruta == "morango") {
    console.log("Adoro morango");
} else {
    console.log("Odeio morango")
}

fruta = "banana";

if (fruta == "morango") {
    console.log("Adoro morango");
} else {
    console.log("Odeio morango")
}



//-- ESTRUTURAS DE CONTROLE: else if --//

console.log("TESTANDO IF ELSE");

let notaMedia = 2;

if (notaMedia >= 7) {
    console.log("Você foi aprovado!")
} else if (notaMedia < 7 && notaMedia >= 3) {
    console.log("Você esta de recuperação!")
} else {
    console.log("Você foi reprovado!")
};



//-- ESTRUTURA DE REPETIÇÃO --//
// A idéia é reptir um bloco de código até uma condição ser verdadeira. Ao inves de repetir o código várias vezes, criamos um statement que fará essa checagem, ou seja um LOOP. Ele vai ocorrer várias vezes até o false se tornar true!



//-- ESTRUTURA DE REPETIÇÃO: while --//
// A idéia é reptir um bloco de código até uma condição ser verdadeira. 
// Precisamos definir um FIM para o loop não se infinito.
console.log("TESTANDO WHILE");

let x = 10;

while (x >= 0) {
    console.log(`O valor é ${x}`)
    x = x - 1
};


let y = 1;
while (y <= 10) {
    console.log(y)
    y = y + 1
};



//-- ESTRUTURA DE REPETIÇÃO: for --//

// Semelhante ao while mas permite fazer tudo em uma unica linha. A mais fácil de entender, na opinião do professor.
// Basta respeitar a ordem: 1.VARIÁVEL 2. CONDIÇÃO 3. INCREMENTO

console.log("TESTANDO FOR");

for (let i = 2; i < 100; i = i * 2) {
    console.log(`O número é i é ${i}`);
}



//-- FORÇANDO A SAIDA DO LOOP: break --//

// Quando precisamos que o loop pare antes de completar seu ciclo

console.log("TESTANDO BREAK");
 
let chama = "Matheus"

for (let b = 0; b < 10; b = b + 1){

if (b == 3){
    chama = "Luma";
}

if(b == 5 && chama == "Luma") {
console.log("O nome é Luma, pode parar");
break;
}

console.log(b);

}