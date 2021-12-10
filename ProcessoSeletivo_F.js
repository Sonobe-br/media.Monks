let credenciais = [1,6,15,23,5,2,32,10];

function compararNumeros(a,b){
    return a - b;
}

console.log('Sequência desordenada:' , credenciais.join());
console.log('Sequência ordenada:' , credenciais.sort(compararNumeros));
