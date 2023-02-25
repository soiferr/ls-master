
let result;

const number1 = prompt('Введите первую цифру: ');
const operator = prompt('Выберите операцию ( любую +, -, * или / ): ');
const number2 = prompt('Введите вторую цифру: ');

switch(operator) {
    case '+':
         result = number1 + number2;
         alert(`${number1} + ${number2} = ${result}`);
         break;

    case '-':
         result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        alert('Недопустимый оператор');
        break;
}