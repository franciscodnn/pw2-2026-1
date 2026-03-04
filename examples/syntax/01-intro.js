

const numero = 11;

// verificar SE o resto da divisão por 2 é IGUAL a 0
if( (numero % 2) == 0)
    console.log("Número par");
else {
    console.log("Número ímpar");
}

// Operador ternário
// console.log( (numero % 2 == 0) ? 'Número par' : 'Número ímpar') ;

// console.log( 5 == 5 );
// console.log( 5 == '5' );
// console.log( 5 === '5' );

let number1 = 10;
let number2 = 5;
let operator = '+';
let result; // result = undefined

if (operator === '+') {
  result = number1 + number2;

} else if (operator === '-') {
  result = number1 - number2;

} else if (operator === '*') {
  result = number1 * number2;

} else if (operator === '/') {
  result = number1 / number2;

} else {
  result = 'Invalid operator';
}

// console.log( result );

number1 = 10;
number2 = 5;
operator = '/';
switch(operator) {
    case '+' : 
                result = number1 + number2;
                break;
    
    case '-' : 
                result = number1 - number2;
                break;
    
    case '*' : 
                result = number1 * number2;
                break;
    
    case '/' : 
                result = number1 / number2;
                break;

    default : 
                result = 'Invalid operator';
                break;
}

console.log( result );

// Estrutura de repetição
for(let i = 0; i < 50; i++) {
    // console.log(i + 1);
}

let i = 0;
while(i < 50) {
    console.log(i + 1);
    i++;
}

console.log( `valor do i = ${i}` );

while(i < 50) {
    console.log(i);
    i++;
}

do {
    console.log( i + 1 );
    i++;
} while(i < 50);

console.log( `valor do i = ${i}` );