// INIT VARIABLES
const scOutput = document.querySelector('#screenOutput');
const btnList = document.querySelectorAll('.allBtns');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const operations = document.querySelectorAll('.operators');
const equal = document.querySelector('#equal');

let firstValue;
let secondValue;
let symbol;

/* ---------------------------------------------- ADD EVENT LISTENERS ------------------------------------------ */

// ADD FUNCTIONALITY TO NUMBER BUTTONS
btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        const characters = Array.from(scOutput.textContent);

        console.log(!characters.includes('.'));
        console.log(btn.textContent);
        if (characters[0] === '0' && characters.length === 1) {
            scOutput.textContent = '';
        }

        if (scOutput.textContent === '' && btn.textContent === '.' && !characters.includes('.')) {
            scOutput.textContent = '0';
        }

        if (characters.includes('.') && btn.textContent === '.') {
            return;
        } else {
            scOutput.textContent += btn.textContent;
        }

    });
});

// CATCH OPERATION
operations.forEach((item) => {
    item.addEventListener('click', () => {
        firstValue = getValue();
        symbol = item.textContent;
        clearOutput();
    });
});

// CLEAR OUTPUT
clearBtn.addEventListener('click', clearOutput);

// DELETE NUMBER / CHARACTER FORM OUTPUT
deleteBtn.addEventListener('click', deleteNumberFromOutput);

// PERFORM OPERATION
equal.addEventListener('click', () => {
    secondValue = getValue();
    console.log(secondValue);

    doCalculations(firstValue, secondValue, symbol);
    strResult = result.toString();
    scOutput.textContent = result;
});

/* ---------------------------------------------- ADD EVENT LISTENERS END --------------------------------------- */

/* ------------------------------------------------- DECLARE FUNCTIONS ------------------------------------------ */

function clearOutput() {
    scOutput.textContent = '0';
}

function deleteNumberFromOutput() {
    const characters = Array.from(scOutput.textContent);
    characters.pop();

    if (characters[characters.length - 1] === '.') {
        characters.pop();
    }
    const joinedString = characters.join('');

    scOutput.textContent = joinedString;
}

function getValue() {
    const value = scOutput.textContent;
    return value;
}

function doCalculations(value1, value2, operation) {
    let resultStr;

    if (value1.includes('.') || value2.includes('.')) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
    } else {
        value1 = parseInt(value1);
        value2 = parseInt(value2);
    }

    if (operation === '+') {
        result = value1 + value2;
    }

    if (operation === '-') {
        result = value1 - value2;
    }
    if (operation === '*') {
        result = value1 * value2;
    }
    if (operation === '÷') {
        result = value1 / value2;
    }

    resultStr = result.toString();

    if (resultStr.includes('.')) {
        result = result.toFixed(2);
    }
}

/* ---------------------------------------------- DECLARE FUNCTIONS END --------------------------------------- */