/* let frutas = ['laranja','banana','manga','limão','morango','mamão','uva','caju','abacaxi','melancia'];
const caixaDeFrutas = frutas.filter((_,i) => frutas[i]);
console.log(frutas.length); */
   
let fruits = [{tipo:'orange'}, {tipo:'banana'}, {tipo:'mango'}, {tipo:'lemon'}];

function allFruits(fruit){

    return fruit.tipo === fruits;

}
 
allFruits(fruits.length);

console.log(fruits.length);  