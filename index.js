function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function increment(a, b){
    a += 1;
    return a;
}

function decrement(a, b){
    a -= 1;
    return a;
}

function makeInt(string){
    let n = parseInt(string, 10);
    return n;
}

function preserveDecimal(string){
    let n = parseFloat(string);
    return n;
}
