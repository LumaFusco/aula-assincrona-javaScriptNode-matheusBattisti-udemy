//EXERCÍCIO 1

console.log("com aspas duplas");
console.log(`com aspas simples`);
console.log(`com template literas da soma de 2 + 2 que é ${2+2}`);
//TEMPLATE LITERAL SERVE PARA INSERIR VARIÁVEIS NO MEIO DO TEXTO


//EXERCÍCIO 2
console.log(2, 2);      //numeros inteiros
console.log(2.5, 2.5);  // numeros com casa decimal
console.log((2 + 2) * 5 / 2);     // por aritmética. Não esquecer a ordem de importância 


//EXERCÍCIO 3
console.log(3 > 5) //com maior
console.log(7 < 5) //com menor
console.log(7 != 5) //com diferente

console.log(3 > 5 ? "é maior que 5" : "é menor que 5") //com maior
console.log(7 < 5 ? "é maior que 5" : "é menor que 5") //com menor
console.log(7 != 5 ? "é diferente" : "é igual") //com diferente


//EXERCÍCIO 4
// && - and | || - or | != - not
console.log(3<5 && 3>2) //com AND (true com true)
console.log(3>5 || "Luma" == "Leo") //com OR (false com false)
console.log(3<5 != 3>5) //com NOT (false vira true)


//EXERCÍCIO 5
console.log("Luma" * 3); //gera um NaN
