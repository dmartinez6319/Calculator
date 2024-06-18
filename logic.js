let operation = false;
let decimal = false
let initialNum = 0;
let modifyNum = 0;
let initalPart = false;
let modifiyPart = false;
let sliced;

function addNum() {
    return initialNum += modifyNum;
}

function subNum() {
    return initialNum -= modifyNum;
}

function multNum() {
    return initialNum *= modifyNum;
}

function divNum() {
    if (modifyNum === 0) {
        displayBox.innerHTML = "ERR";
        return false
    }
    
    return initialNum /= modifyNum

}

const displayBox = document.getElementById("display");
function displayNum(num) {
    displayBox.innerHTML += num
}

function clearOut() {
    displayBox.innerHTML = "0";
    operation = false;
    decimal = false;
    initialNum = 0;
    modifyNum = 0;
    initalPart = false;
    modifiyPart = false;
}

const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(function(v){
    v.addEventListener("click",function(){
        let num = Number(v.innerHTML);
        if (num === 0 && Number(displayBox.innerHTML) === 0 && !decimal){
            return;
        }
        if (Number(displayBox.innerHTML) === 0 && !decimal) {
            displayBox.innerHTML = "";
        }
        displayNum(num);
    })
})

function doOperation(){
    let result;
    console.log(operation);
    switch (operation) {
        case "+":
            result = addNum();
            break;
        case "-":
            result = subNum();
            break;
        case "*":
            result = multNum();
            break;
        case "/":
            result = divNum();
            break;
    }
    
    displayBox.innerHTML = initialNum;
    operation = false;
    modifiyPart = false;
    if (initialNum % 1 !== 0){
        decimal = false;
    }
    console.log("Result set to: " + initialNum);
    console.log("Operation set to: " + typeof(operation));
}

function setInitalNumber(op){
    if ((!decimal || op !== "=") && !initalPart) {
        initalPart = true;
        initialNum = Number(displayBox.innerHTML);
        operation = op;
        sliced = displayBox.innerHTML.length;
        console.log("Initial Number set: " + initialNum);
        
    }
}

function setModifyNumber(){
    if (initalPart){
        modifyNum = Number(displayBox.innerHTML.slice(sliced+3));
        console.log("Modified number is: " + modifyNum);
        modifiyPart = true;
    }
}

function checkOperation(op) {

    if (operation === op) {
        return;
    }

    console.log("Operation is: "+ typeof(operation))
    if (op !== "." && op !== "=" && typeof(operation) !== "boolean") {
        console.log("i delted")
        let x = displayBox.innerHTML.slice(0,displayBox.innerHTML.length-3);
        displayBox.innerHTML = x;
    }

    setInitalNumber(op);
    if (op !== "="){
        console.log("Changed operation: " + op);
        operation = op;
    }
    if (initalPart){
        decimal = false;
    }
    switch (op) {
        case "+":
            displayNum(" + ");
            break;
        case "-":
            displayNum(" - ");
            break;
        case "*":
            displayNum(" * ");
            break;
        case "/":
            displayNum(" / ");
            break;
        case "CE":
            clearOut();
            break;
        case "=":
            setModifyNumber();
            doOperation(op);
            break;
        case ".":
            if (decimal) {
                return;
            }
            decimal = true;
            operation = false;
            displayNum(".");
            break;
    }
    // operation = op;
}

const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach(function(v){
    let operation = v.innerHTML;
    v.addEventListener("click",function(){
        checkOperation(operation);
    })
    
})