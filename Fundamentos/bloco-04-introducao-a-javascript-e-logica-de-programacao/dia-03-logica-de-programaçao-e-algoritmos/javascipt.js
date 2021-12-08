//Exercicio 1
console.log('Exercício 1')
let lista1 = [];
let x = 10;
let fatorial = 10;
for(let i = 0; i < 10; i += 1){
    lista1.push(x - i);
}for(let i = 1; i < lista1.length; i += 1){
    fatorial = fatorial * lista1[i]
}console.log(fatorial);

//Exercício 2
console.log('Exercício 2')
let word = 'tryber';
let invertido = word[word.length -1];
for(let i = word.length -2; i >= 0; i -= 1){
    invertido = invertido + word[i];
}console.log(invertido);

//Exercício 3
console.log('Exercício 3')
let array = ['a','java', 'javascript', 'python','html', 'css'];
let maior = ['a'];
for(let i = 0; i < array.length; i += 1){
    if(array[i].length > maior[maior.length -1].length){
        maior.push(array[i])
    }
}console.log(maior[maior.length -1]);
let menor = [maior[maior.length -1]];
for(let i = 1; i < array.length; i += 1){
    if(array[i].length < menor[menor.length -1].length){
        menor.push(array[i])}
    }console.log(menor[menor.length -1]);

//Exercício 4
console.log('Exercício 4');
let numeros = [];
let primos = [];
for(let i = 0; i <= 50; i += 1){numeros.push(i)};
    for(let i = 0; i < numeros.length; i += 1){let contador = 0;
         for(let y = 1; y <= numeros[numeros.length -1]; y += 1){
             if(numeros[i] % y === 0){contador += 1}
         }if(contador === 2){primos.push(numeros[i])
         }
        }console.log(primos);
        let maiorPrimo = 0; 
    for(let i = 0; i < primos.length;i += 1 ){
        if(primos[i] > maiorPrimo){maiorPrimo = primos[i]}
    }console.log("Maior primo = " + maiorPrimo);