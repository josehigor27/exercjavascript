const nome = 'Pedro'; // variável global

function dizerNome(){
    var nome = 'João';
    console.log(`O nome é ${nome}`);
}

if(true){
    const nome = 'Salete';
    console.log(nome);
}

console.log(nome);
dizerNome();