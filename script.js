const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
    
});

const operators = document.querySelectorAll(".operator,.percentage");
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        updateScreen(prevNumber + calculationOperator)
    });
});

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    
    calculationOperator = operator;
    currentNumber = '';
}


const update = (number) => {
    console.log(number);
    screen.value = number;
};
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}


const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
        case "%":
            result = parseFloat(prevNumber) / 100;
            break
        default:
            return
    }
    currentNumber = result;
    calculationOperator = '';
};