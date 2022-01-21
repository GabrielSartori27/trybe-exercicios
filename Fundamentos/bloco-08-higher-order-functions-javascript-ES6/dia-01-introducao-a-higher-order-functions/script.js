//Exercício 1
console.log('Exercício 1');
const newPerson = (string) => {
    const person = {
        'Nome Completo': string,
        email: `${string.toLowerCase().split(' ').join('_')}@trybe.com`,
    }
    return person;
}
const newEmployees = (funct) => {
    const employees = {
      id1: funct('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funct('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funct('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(newPerson));
  //Exercício 2
  console.log('Exercício 2');
  const checkResult = (number, sortedNumber) => {
      if(number === sortedNumber){
          return true;
      }else{
          return false;
      }
  }
  const sort = (number, check) => {
    min = Math.ceil(1);
    max = Math.floor(6);
    let sortedNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(number, sortedNumber)
    //source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    if(check(number, sortedNumber) === false){
        return 'Tente novamente';
    }else{
        return 'Parabéns você ganhou';
    }
  }
  console.log(sort(5, checkResult));
  //Exercício 3
  console.log('Exercício 2');
  const score = (answers1, answers2) => {
      let finalScore = 0;
    for(let i = 0; i < answers1.length; i += 1){
        if(answers1[i] === 'N.A'){
            finalScore -= 0;
        }else if(answers1[i] === answers2[i]){
            finalScore += 1;
        }else{
            finalScore -= 0.5;
        };
    };
    return finalScore
  }
  const result = (answers1, answers2, funct) => {
    return funct(answers1, answers2);
  };
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, score));
