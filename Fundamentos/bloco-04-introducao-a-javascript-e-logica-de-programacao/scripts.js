//Programa 1:
console.log('Exercicio 1')

const a = -10
const b = 25
a + b 
a - b 
a * b
a / b
a % b
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//Programa 2:
console.log('Exercicio 2')

if(a > b){console.log(a)}else if(b > a){console.log(b)}else{console.log("a = b")}

//Programa 3:
console.log('Exercicio 3')

const x = 5;
const y = 30;
const z = 20;
if(x > y && z){console.log(x)}else if(y > x && z){console.log(y)}else if(z>x&&y){console.log(z)}

//Programa 4:
console.log('Exercicio 4')

const valor = 4;
if(valor < 0){console.log('negative')}else if(valor > 0){console.log('positive')}else{console.log('zero')}

//Programa 5:
console.log('Exercicio 5')

const angulo1 = 10;
const angulo2 = 110;
const angulo3 = 60;
if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){console.log("erro")}else if(angulo1 + angulo2 + angulo3 !== 180){console.log(false)}else if(angulo1 + angulo2 + angulo3 === 180){console.log(true)};

//Programa 6:
console.log('Exercicio 6')
let peça = 'Torre'
if(peça.toLowerCase() === 'torre'){console.log('frente e lados')}else{console.log('erro')}

//Programa 7:
console.log('Programa 7')
let nota = 49
if(nota > 100 || nota < 0){console.log('erro')}else if(nota >= 90){console.log('A')}else if(nota >= 80){console.log('B')}else if(nota >= 70){console.log('C')}else if(nota >= 60){console.log('D')}else if(nota >= 50){console.log('E')}else if(nota < 50){console.log('F')}

//Programa 8:
console.log('Programa 8')
let variavel1 = 27;
let variavel2 = 4;
let variavel3= 9;
if(variavel1 % 2 === 0 || variavel2%2 === 0 || variavel3%2 === 0){console.log(true)}else{console.log(false)}

//Programa 9:
console.log('Programa 9')
let variavel4 = 16;
let variavel5 = 18;
let variavel6 = 25;
if(variavel1 % 2 != 0 || variavel2%2 != 0 || variavel3%2 != 0){console.log(true)}else{console.log(false)}

//Programa 10:
console.log('Programa 10')
let custo = 25;
let imposto = 0.20*custo;
let custoTotal = custo + imposto;
let preço = 40;
let quantidade = 1000;
if(custo < 0){console.log('erro')}else if(imposto < 0){console.log('erro')}else if(custoTotal < 0){console.log('erro')}else if(preço < 0){console.log('erro')};
let lucro = preço*quantidade - custoTotal*quantidade;
console.log(lucro);

//Programa 11:
console.log('Programa 11')
let salarioBruto = 3000;
let inss;
if(salarioBruto <= 1556.94){inss = salarioBruto - 0.08*salarioBruto}else if(salarioBruto >=1556.95 && salarioBruto<=2594.62){inss = salarioBruto - 0.09*salarioBruto
}else if(salarioBruto >=2594.93 && salarioBruto<=5189.92){inss = salarioBruto - 0.11*salarioBruto
}else{inss = salarioBruto -570.88}
let ir;
if(inss <=1903.98){ir = inss}else if(inss >= 1903.99 && inss <=2826.65){ir = inss -((inss*0.075)-142.8)
}else if(inss >= 2826.66 && inss <=3751.05){ir = inss -((inss*0.15)-354.80)
}else if(inss >= 3751.06 && inss <=4664.68){ir = inss -((inss*0.225)-636.13)}else{ir = inss -((inss*0.275)-869.36)}
let salarioLiquido = ir;
console.log(salarioLiquido);


