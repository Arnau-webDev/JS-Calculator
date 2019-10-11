const scOutput = document.querySelector("#screenOutput");
const btnList = document.querySelectorAll(".allBtns");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const operations = document.querySelectorAll(".operators");
const equal = document.querySelector("#equal");


let firstValue;
let secondValue;
let symbol;
let result;


// btnList.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const characters = Array.from(scOutput.textContent);

//         console.log(!(characters.includes(".")));
//         console.log(btn.textContent);
//         if (characters[0] === "0") {
//             scOutput.textContent = "";
//         }
//         scOutput.textContent += btn.textContent;

//     })
// });

// NEED TO WORK ON .NUM SCENARIO NO MORE, NOW TOFIXED

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        const characters = Array.from(scOutput.textContent);

        console.log(!(characters.includes(".")));
        console.log(btn.textContent);
        if (characters[0] === "0" && characters.length === 1) {
            scOutput.textContent = "";
        }

        if (scOutput.textContent === "" && btn.textContent == "." && !(characters.includes("."))) {
            scOutput.textContent = "0";
        }
        scOutput.textContent += btn.textContent;

    });
});




operations.forEach(item => {
    item.addEventListener("click", () => {
        firstValue = getValue();
        symbol = item.textContent;
        clearOutput();
        console.log(firstValue);
        console.log(symbol);
    });
});

clearBtn.addEventListener("click", clearOutput);

deleteBtn.addEventListener("click", deleteNumberFromOutput);

equal.addEventListener("click", () => {
    secondValue = getValue();
    console.log(secondValue);

    doCalculations(firstValue, secondValue, symbol);
    console.log(result);
    scOutput.textContent = result;
});

function clearOutput() {
    scOutput.textContent = "0";
};


function deleteNumberFromOutput() {
    const characters = Array.from(scOutput.textContent);
    characters.pop();

    if (characters[characters.length - 1] === ".") {
        characters.pop();
    };
    const joinedString = characters.join("");

    scOutput.textContent = joinedString;
};

function getValue() {
    const value = scOutput.textContent;
    console.log("Value " + value);

    return value;
};

function doCalculations(value1, value2, operation) {
    const characters1 = Array.from(value1);
    const characters2 = Array.from(value2);
    let parsed1;
    let parsed2;

    console.log(characters1);

    if (characters1.includes(".") || characters2.includes(".")) {
        parsed1 = parseFloat(value1);
        parsed2 = parseFloat(value2);
        parsed1.toFixed(2);
        parsed2.toFixed(2);
    } else {
        parsed1 = parseInt(value1);
        parsed2 = parseInt(value2);
    }

    console.log(parsed1.toFixed(2));


    if (operation === "+") {
        result = parsed1 + parsed2;
    }

    if (operation === "-") {
        result = parsed1 - parsed2;
    }
    if (operation === "*") {
        result = parsed1 * parsed2;
    }
    if (operation === "÷") {
        result = parsed1 / parsed2;
    }

    result.toFixed(2);
};

// function getOperation(item) {
//     const operation = item.textContent;
//     console.log(operation);
//     return operation;
// };


// function normalizer(toNormalize) {

//     if (typeof toNormalize === "object") {
//         const normalized = toNormalize.filter(item => {
//             return !isNaN(item);
//         });

//         return normalized;
//     } else if (typeof toNormalize === "string") {
//         const normalized = toNormalize.join("");
//         return normalized;
//     }

//     console.log(normalized);
//     return normalized;
// };