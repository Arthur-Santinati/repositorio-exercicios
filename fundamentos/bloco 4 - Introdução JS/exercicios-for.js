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

