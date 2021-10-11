/*
Exercicio 1 - operadores aritméticos
let a = 10
let b = 2

// adição 
console.log (a+b)
// subtração
console.log (a-b)
// divisão
console.log (a/b)
// resto da divisão
console.log (a%b)
// multiplicação
console.log (a*b) */

/* Exercicio 2 - imprimindo a maior variavel
let a = 10
let b = 8

if (a > b){
    console.log(a)
} else {
    console.log(b)
} */

/* Exercicio 3 - imprimindo a maior varivel entre 3 valores 
let a = 10
let b = 12
let c = 2

if (a > b && a > c){
    console.log(a)
} else if (b > a && b > c){
    console.log(b)
} else {
    console.log(c)
}*/

/* Exercicio 4 - imprimindo positive ou negative de acordo com a constante
const number = 10

if (number > 0){
    console.log("Positive")
} else {
    console.log("Negative")
} */

/* Exercicio 5 - imprimir true se os 3 angulos formam 180 graus e false se não
let a = 65;
let b = 100;
let c = 15;
let soma = a + b + c;
let seOsAnguloSaoPossiveis = a > 0 && b > 0 && c > 0;


if (seOsAnguloSaoPossiveis){
    if (soma === 180) {
        console.log(true)
    } else { console.log(false)}
} else{
    console.log("erro angulo inválido")
}*/

/* Exercicio 6 - fazer os casos de qual peça de xadrez vai ser e imprimir quanto ela pode andar

let peça = "REI"

switch (peça.toLocaleLowerCase()){
    case "rainha":
        console.log("pode andar quantas casas quiser para qualquer lado e diagonal")
        break
    case "peão":
        console.log("pode andar duas casas pra frente")
        break
    case "rei":
        console.log("pode andar uma casa para qualquer lado")
        break   
    case "cavalo":
        console.log("anda em formato de 'L' duas pra frente e uma pra esquerda/direita")
        break    
    case "torre":
        console.log("anda quantas casas quiser frente/trás ou esquerda/direita")
        break
    case "bispo":
        console.log("anda quantas casas quiser nas diagonais")
        break
} */

/* Exercicio 7 - transformando uma nota de porcentagem em A,B,C

let notaEmPorcentagem = 99
if (notaEmPorcentagem > 0 && notaEmPorcentagem < 100){
    if (notaEmPorcentagem >= 90 || notaEmPorcentagem == 100) {
        console.log("Sua nota é A")
    } else if (notaEmPorcentagem >= 80){
        console.log("Sua nota é B")
    } else if (notaEmPorcentagem >= 70){
        console.log("Sua nota é C")
    }else if (notaEmPorcentagem >= 60){
        console.log("Sua nota é D")
    }else if (notaEmPorcentagem >= 50 ){
        console.log("Sua nota é E")
    }else if (notaEmPorcentagem < 50){
        console.log("Sua nota é F")
    }
} else if (notaEmPorcentagem < 0 || notaEmPorcentagem > 100){
    console.log("Nota impossivel de converter")
} */

/* Exercicio 8 - Verificando entre 3 constantes se uma delas pelo menos é par
const n1 = 3
const n2 = 3
const n3 = 10

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    console.log(true)
} else{
    console.log(false)
} */

/* Exercicio 9 - Verificando entre 3 constantes se uma delas pelo menos é impar
const n1 = 3
const n2 = 10
const n3 = 10

if (n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1) {
    console.log(true)
} else{
    console.log(false)
} */

/* Exercicio 10 - custo de um produto e valor da venda 
const valorCusto = 1;
const valorDeVenda = 3;

if (valorCusto >= 0 && valorDeVenda >= 0) {
  const valorCustoTotal = valorCusto * 1.2;
  const lucroTotal = (valorDeVenda - valorCustoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
} */

