const nomes = ["José", "Higor", "Sofia"];

const nome = nomes[1];

console.log(nome);

nomes.push('Geralda');
// .push adiciona o elemento ao final do vetor
console.log(nomes);

console.log(nomes.sort())

nomes.pop();
console.log(nomes)

nomes.shift('Julia')
//.shift remove o primeiro elemento ao inicio da lista
console.log(nomes);

nomes.unshift('Pedro')
//.unshift adiciona o elemento ao inicio da lista
console.log(nomes);

console.log(nomes.indexOf("Higor"))