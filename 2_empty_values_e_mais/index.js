//EMPTY VALUES = VALORES NULOS

console.log(null);
console.log(undefined);

//CONVERSÕES DE TIPO AUTOMÁTICA: TOME CUIDADO COM ESSAS CONVERSÕES AUTOMÁTICAS E SILENCIOSAS. ELAS NÃO ACUSAM ERROS!

console.log("123" + 4); //Soma de string com number: ele concatena. Fica 1234

console.log(typeof ("123" + 4)); //ele prova que é uma string

//-------------------------//

console.log("30" - 20); //Subtração de string com number: ele subtrai, aparece 10

console.log(typeof ("30" - 20)); //ele prova que é number 

//----------------------------//

console.log("10" * 20); //Multiplicação de string numero com number: efetua a operação e retona o numero 200

console.log(typeof ("10" * 20)); //indica que é number

//----------------------------//

console.log("luma" * 20); //Multiplicação de string texto com number: retonar NaN (numero não identificado)

console.log(typeof ("luma" * 20)); //indica que é number