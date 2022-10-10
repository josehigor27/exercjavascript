var nome = 'Pedro'; // variável global

function dizerNome(){
    var nome = 'João';
    console.log(`O nome é ${nome}`);
}

if(true){
    var nome = 'Salete';
}

console.log(nome);
dizerNome();