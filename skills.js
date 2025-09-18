// make a add program
function add(a, b) {
    return a + b;
}

// make a subtract program
function subtract(a, b) {
    return a - b;
}

// make a multiply program
function multiply(a, b) {
    return a * b;
}

// make a divide program
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// make a power program
function power(a, b) {
    return Math.pow(a, b);
}

// make a square root program
function squareRoot(a) {
    if (a < 0) {
        throw new Error("Cannot take square root of negative number");
    }
    return Math.sqrt(a);
}   