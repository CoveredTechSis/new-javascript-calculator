//This is a basic arithmetic calculator
// take the operator input const operator = prompt('Enter operator(either +, -, *, / ): ');

var operator= prompt('operator:+, -, *, /');
var num1 = parseInt(prompt ('number1:'));
var num2 = parseInt(prompt ('number2:'));

if(operator == '+'){console.log(num1+num2)}
else if(operator == '-'){console.log(num1+num2)}
else if(operator == '*'){console.log(num1+num2)}
else if(operator == '/'){console.log(num1+num2)}
else console.log(result);
console.log('{num1}and {operator} and {num2} ={result}')

