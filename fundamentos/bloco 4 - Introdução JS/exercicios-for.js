let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
var maior = 0;
var menor = 0;
/* ex 1 = Some todos os valores contidos no array e imprima o resultado;
for (let i = 0;i < numbers.length;i++) {
    soma += numbers[i]  
}
console.log(soma)
*/
/* ex 2 = percorra o array imprimindo todos os valores nele contidos
for (let i = 0;i < numbers.length;i++) {
    console.log(numbers[i])
}
*/
/* ex 3 = calcule e imprima a média aritmética dos valores contidos no array;
for (let i = 0;i < numbers.length;i++) {
    soma += (numbers[i])/numbers.length
}
console.log(soma)
*/
/* ex 4 = Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let i = 0;i < numbers.length;i++) {
    soma += (numbers[i])/numbers.length
}
if (soma > 20){
    console.log("o valor é maior que vinte, ele é de:", soma)
} else {console.log("o valor é menor do que vinte, ele é de :", soma)}
*/

/* Referencia: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
ex 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o;
      Utilizando for , descubra qual o menor valor contido no array e imprima-o; 
for (var i = 0; i < numbers.length; i++) {
    if ( numbers[i] > maior ) {
        maior = numbers[i];
    }
}
console.log("O maior número encontrado foi:", maior)

for (var i =0; i < numbers.length; i++){
    if (numbers[i] < menor){
        menor = numbers[i]
    }
}
console.log("O menor número encontrado foi:", menor)*/

/* ex 8 = Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
let num = []

for (let i = 0; i <= 25 ; i += 1){
    num.push(i);
}
console.log(num); */

/* ex 9 = Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

for (let i = 0; i < num.length ; i += 1){
    console.log((num[i])/2)
} */
/* ex 6 = Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let result = 0
for (let i = 0; i < numbers.length ; i += 1){
    if (numbers[i] % 2 !== 0){
        result +=1
    }

}

if (result === 0){
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log("a quantidade de números ímpares encontrados foi de:", result, "números")
} */
/* ex bonus = faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 10
let inputLine = ''
let symbol = '*'

for (index = 0; index < n; index += 1){
    inputLine = inputLine + symbol
}
for (index = 0; index < n; index += 1){
    console.log(inputLine)
} */


let n = 10
let lineVazio = ''
let symbol = '*'


for (index = 0; index < n; index += 1){
    lineVazio = lineVazio + symbol
}
for (index = 0; index < n; index += 1){
    console.log(lineVazio)
}