
do{
    let result;

// Taking input variables
const  number1 = parseFloat(prompt('Enter first number: '));
const  number2 = parseFloat(prompt('Enter second number: '));
// Taking operator as input
var operator =  prompt('Enter operator ( either +, -, * or / ): ');
switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
var repeat =  prompt('Do you want to perform further calculations? Y/N ');}
while(repeat != 'N')

