//Map executa uma função em cada item da lista informada
// depois retorna outra lista com o resultado da função executada em todos os itens

const ages = [2,6,5,7,8,1];

const agesByPar = ages.filter(function(age){
    return age % 2 === 0;
})

console.log(agesByPar)