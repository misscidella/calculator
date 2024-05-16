
let results = document.querySelector('.results');
let currentNumber = '';
let operator = '';

const appendNumber=number=> {
    if (number !=='')
    currentNumber += number;
    results.textContent = currentNumber;
}

const appendOperator = op => {
    if (currentNumber !== '') {
        currentNumber += op;
        results.textContent = currentNumber;
        operator = op;
    }
}

const calculate= ()=> {
    try {
        let result = eval(currentNumber);
        results.textContent = result;
        currentNumber = result.toString();
        operator = '';
    } catch (error) {
        results.textContent = 'Error';
        currentNumber = '';
        operator = '';
    }
}

const toggleSign = () => {
    if (currentNumber !== '') {
        currentNumber = parseFloat(currentNumber) * -1;
        results.textContent = currentNumber;
    }
}

const clearAll = () => {
    currentNumber = '';
    operator = '';
    results.textContent = '';
}
document.addEventListener('keydown',event=>{
    if(event.key=='Enter'){
        calculate();
        event.preventDefault();
    }
    else if (event.code=='Space'){
        event.preventDefault();
       
    }
})
