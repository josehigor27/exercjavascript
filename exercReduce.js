//Reduce, se usa para reduzir todos os valores de uma lista para um só
// a função reduce recebe dois parametros
// 1 - o valor atual de cada item da lista
// 2 - acumulator - vai ser o valor atual da acumulação de todos as execuções da função
// 3 - o 0 informado é o valor atual do accumulator
const numbers = [2,6,5,7,8,1];

const sumOfNumber = numbers.reduce(function(number, accumulator){

    return Number(accumulator) + Number(number);

},100)

console.log(sumOfNumber)