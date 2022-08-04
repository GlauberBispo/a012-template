// const bool1 = false;
// const bool2 = true;
// const bool3 = true;

// if (bool1) {
//     alert('ENTREI NO IF, SOU TRUE')
// } else {
//     alert('ENTREI NO ELSE, SOU FALSO')
// }

// if (bool1 === bool2) {
//     alert('1 e 2 são íguais!')
// }
// else if (bool2 === bool3) {
//     alert('2 e 3 são íguais!')
// }
// else if (bool1 === bool3) {
//     alert('1 e 3 são íguais!')
// }
// else {
//     alert('Nenhuma das condições são íguais')
// };

// const idade = 60

// if (idade < 16 ) {
//     alert('Não é permitido tirar o título de eleitor.')
// } else if ((idade >= 16 && idade < 18) || (idade > 60)){
//     alert('Não é obrigatório o voto.')
// }else {
//     alert ('É obrigatório o voto.')
// }

const nome = prompt('Qual o seu nome?')
const nota1 = +prompt('Qual foi sua 1º nota?');
const nota2 = +prompt('Qual foi sua 2º nota?');
const nota3 = +prompt('Qual foi sua 3ºnota?');
const media = ((nota1 + nota2 + nota3)/3).toFixed(1);

if (media > 5 && media <= 10) {
    alert(`${nome}, sua média geral foi de ${media}, você esta aprovado!`)
} else if (media < 5 && media > 3) {
    alert(`${nome}, sua média geral foi de ${media}, você está em recuperação!`)
} else if (media >= 0 && media < 3){
    alert(`${nome}, sua média geral foi de ${media}, você foi reprovado!`)
} else {
    alert(`DADO INVÁLIDO`)
};



