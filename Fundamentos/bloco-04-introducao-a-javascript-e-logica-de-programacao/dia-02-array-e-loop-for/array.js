let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercício 1
console.log('Exercício 1')
for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i])
}
//Exercício 2
console.log('Exercicio 2')
let soma = 0;
for(let i = 0; i < numbers.length; i += 1){
    soma = soma + numbers[i];
}
console.log(soma);

//Exercício 3
console.log('Exercício 3')
let average = soma/numbers.length;
console.log(average);
//Exercício 4
console.log('Exercício 4')
if(average >20){console.log('valor maior que 20')}else{console.log('valor menor ou igual a 20')};
//Exercício 5
console.log('Exercício 5')
let maiorValor = 0;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > maiorValor){maiorValor = numbers[i]}
}
console.log(maiorValor);
//Exercício 6
console.log('Exercício 6')
let ímpares = 0;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i]%2 !== 0){ímpares += 1}
}
if(ímpares > 0){console.log(ímpares)}else{console.log("nenhum valor ímpar encontrado")};
//Exercício 7
console.log('Exercício 7')
let menorValor = maiorValor;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] < menorValor){menorValor = numbers[i]}
}
console.log(menorValor)
//Exercício 8
console.log('Exercício 8')
lista = [];
for(let i = 1; i <= 25; i += 1){
    lista.push(i)
}
console.log(lista);
//Exercício 9
console.log('Exercício 9')
divisão = [];
for(let i = 0; i < lista.length; i += 1){
    divisão.push(lista[i]/2)
}
console.log(divisão);




