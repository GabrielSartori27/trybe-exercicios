console.log('Exercício 1')
function palindromo(string){
    let word1 = [];
    let word2 = [];
for(let i = 0; i < string.length; i += 1){
    word1.push(string[i])
    word2.push(string[i])
    }
    word2.reverse();
    word1 = word1.join('');
    word2 = word2.join('');
    console.log(word1);
    console.log(word2);
    if(word1 === word2){
        return true;
    }else{
        return false;
    }
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

console.log('Exercício 2')
let teste = [2, 3, 6, 7, 10, 1];
function highestValue(numbers){
    let n = numbers[0]
    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] > n){
            n = numbers[i]
        }
    }
    let max = numbers.indexOf(n)
    return max;
}
console.log(highestValue(teste));

console.log('Exercício 3')
let teste2 = [2, 4, 6, 7, 10, 0, -3]
function lowerValue(numbers){
    let n = numbers[0]
    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] < n){
            n = numbers[i]
        }
    }
    let min = numbers.indexOf(n)
    return min;
}
console.log(lowerValue(teste2));

console.log('Exercício 4')
let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function moreCharacters(names){
    let name = names[0];
    for(let i = 0; i < names.length; i += 1){
        if(names[i].length > name.length){
            name = names[i]
        }
    }
    return name;
}
console.log(moreCharacters(teste3));

console.log('Exercício 5')
let teste4 = [2, 3, 2, 5, 8, 2, 3]
function repetition(array){
    let count = 0;
    let value;
    for(let i = 0; i < array.length; i += 1){let counting = 0; for(let y = 0; y < array.length; y += 1){
        if(array[i] === array[y]){
            counting += 1
        }
        if(counting > count){
            count = counting;
            value = array[i];
        }
     }
    }
    return value;
}
console.log(repetition(teste4));

console.log('Exercício 6')
function summation(number){
    let numbersList = [];
    let value = 0;
    let result = 0;
    for(let i = 0; i < number; i += 1){
        value += 1
        numbersList.push(value)
    }
    for(let i = 0; i < numbersList.length; i += 1){
        result = result + numbersList[i];
    }
    return result;
}
console.log(summation(5));

console.log('Exercício 7')

function isItTheEnding(stringWord, stringEnding){
    let count = 0;
    for(let i = 0; i < stringEnding.length; i += 1){
        if(stringWord[(stringWord.length -1) - i] === stringEnding[(stringEnding.length -1) - i]){
            count += 1;
        }
    }
    if(count === stringEnding.length){
        return true;
    }else{
        return false;
    }
}
console.log(isItTheEnding('trybe','be'));
console.log(isItTheEnding('joaofernando','fernan'))

