/* ***************** FUNÇÕES *****************
São estruturas de código que podem ser resproveitadas.
Tem como principal objetivo: poupar a repetição de códigos, pois podem ser usadas quantas vezes for necessário ao longo do programa.

***************** DEFININDO UMA FUNÇÃO *****************
1. começa com a palavra function
2. pode conter argumentos/parâmetros, definidos entre ()
3. o corpo da função entre {}
4. geralmente a função retorna um valor -> RETURN
5. é possível declarar funções em variáveis (chamada função anônima). Ex: const + nomeDaFuncao = function (){}


 - FORMA 1: DECLARANDO A FUNÇÃO

 function escreverNoConsole() {
    console.log("Escrevendo no console!");
 }
 escreverNoConsole();


 - FORMA 2: ATRAVÉS DE UMA VARIÁVEL (função anônima porque não tem nome, está dentro de uma variável)

 const textoNoConsole = function() {
    console.log("Texto no Console!");
 }
textoNoConsole();


 - FORMA 3: POR PARÂMETRO

 const textPorParametro = function(texto){
    console.log(texto);
 }
textPorParametro("Testando por Parâmetro"); 



***************** FUNÇÕES NA PRÁTICA ***************** */

/* function imprimirNoConsole() {
    console.log("Declarando a função");
}
imprimirNoConsole();


const colocarNoConsole = function(){
    console.log("Através de variável");
}
colocarNoConsole();


const imprimirNumero = function(numero){
    console.log(numero);
}
imprimirNumero(5161235);
imprimirNumero(5161);


const maisDeUmParametro = function(nome, idade){
    console.log("Olá! Sra " + nome + ", sua idade é " + idade);
}
maisDeUmParametro("Luma", 23);
maisDeUmParametro("Lorena", 1.6); */



/*  ***************** MAIS SOBRE FUNÇÕES ***************** 

executando algo dentro da função, por exemplo: aritimética */

/* const soma = function (num1, num2){
    return num1 + num2;
}

console.log(soma(2, 3));



const saudacao = function(nome){
    if (nome == "Luma"){
        console.log("Boa noite " + nome + ", seja bem vinda!");
    } else {
        console.log("não identificado");
    }
}
saudacao ("Luma");



function multiplicacao (numero1, numero2){
    return numero1 * numero2
}
console.log(multiplicacao(3, 2));

const mult = multiplicacao (6,6);
console.log(mult);



function podeDirigir (idade, CNH){
    if (idade > 18 && CNH == 1){
        console.log("pode dirigir");
    }else{
        console.log("não pode dirigir");
    }
}
podeDirigir(25, 1);
podeDirigir(25, 0);
podeDirigir(15, 1);
podeDirigir(15, 0); */



/*  ***************** ESCOPO DE UMA FUNÇÃO ***************** 
muita atenção pois o que ocorre dentro de uma função, fica separado do restante do código. Veja no exemplo o a recebe dois valores, um dentro e um fora da função:*/

/* let a = 20;

const numero = function(){
    let a = 30;
    console.log(a);
    }

console.log(a);
numero();



console.log("Isolando com IF");

let b = 10

if(b > 5){
    let b = 20;
    b++;
    console.log(b)
}

console.log(b)
 */



/*  ***************** ESCOPO ANINHADO ***************** 
pode acontecer em função, em if, global......*/

/* let a = 10;

function multiplicacao(x,y){
    let a = x * y;
    console.log("O A da função é " + a);


    if(a > 10){
        a = 0;
        a++;
        console.log("O A do if é " + a)
    }
}

console.log("O A global é " + a);
multiplicacao(5,3); */



/*  ***************** ARROW FUNCTION ***************** 
Trate-se de uma nova forma de escrever uma função.
- É um função anônima (sem nome)
- não precisa escrver "function"
- Precisa ser atrelada a uma variável, MESMO QUE SEJA VAZIA
- Exemplo:

const parOuImpar = (n) => {
    return n% 2;
};
console.log(parOuImpar(3));  */

/* const primeiraArrow = (love) => {
    console.log(love);
}
primeiraArrow("Luma");


const segundaArrow = () => {
    console.log("Leonardo");
};
segundaArrow();

const terceiraArrow = (a, b) => {
    return a + b;
}
console.log(terceiraArrow(3, 2)); */



/*  ************** MAIS SOBRE ARROW FUNCTION ************** 
ATENÇÃO: se só tem UM PARÂMETRO, podemos escrever sem () e sem return: note que é o mesmo! */

/* const multiplicaVersaoUm = (x) =>{
    return x * x;
}
console.log(multiplicaVersaoUm(3));


const multiplicaVersaoDois = y => y * y;
console.log(multiplicaVersaoDois(4)); */



/*  ************** ARGUMENTOS OPICIONAIS ************** */

/* function soma(a,b) {
    if (a === undefined || b === undefined) {
        console.log("falta um argumento");
    } else {
        return a + b;
    }
}
console.log(soma(1));
console.log(soma(4,5)); */


/* function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log("Boa noite " + nome);
    } else {
        console.log("Boa noite " + nome + " sua idade é " + idade);
    }
}

saudacao("Luma");
saudacao("Luma", 34); */



/*  ************** ARGUMENTOS COM VALOR DEFAULT ************** 
desta forma, podemos pré determinar um valor para um argumento, caso o mesmo não seja explicito. Ou seja, se não houver o argumento não será UNDEFINED e sim o que pré estabelecemos. */

/* function saudacao(nome, idade=20) {
   return console.log("Boa noite " + nome + " sua idade é " + idade);
}
saudacao("Luma");
saudacao("Luma", 34);  */


/*  ************** CLOSURE ************** 
basicamente significa que uma função irá retornar outra função! */



/*  ************** RECURSION ************** 
uma funcionalidade que permite uma função se chamar novamente */
