//Map executa uma função em cada item da lista informada
// depois retorna outra lista com o resultado da função executada em todos os itens
const numbers = [2,6,5,7,8,1];

const numbersMultByTwo = numbers.map(function(number){
    return number * 2;
})

console.log(numbersMultByTwo)

const names = ["jose", "higor", "germano", "sousa"]

const namesUpCase = names.map(function(aux){
    return aux.toUpperCase();
});

console.log(namesUpCase)

const numbersParImpa = numbers.map(function(number){
    return number%2 == 0 ? 'par':'impar';
})

console.log(numbersParImpa)

const numbersSumByFive = numbers.map(function(number){
    return Number(number)+5
})
console.log(numbersSumByFive)