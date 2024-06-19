/*
      _______      _________      _____       ______     _
     / _____ \    |____ ____|    / ___ \     | ____ \   | |
    / /     \_\       | |       / /   \ \    | |   \ \  | |
    | |               | |      / /     \ \   | |   | |  | |
    \ \______         | |      | |     | |   | |___/ /  | |
     \______ \        | |      | |     | |   |  ____/   | |
            \ \       | |      | |     | |   | |        | |
     _      | |       | |      \ \     / /   | |        |_|
    \ \_____/ /       | |       \ \___/ /    | |         _
     \_______/        |_|        \_____/     |_|        |_|

     this code suckss!!
*/

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
        console.log("returned false")
        initialNum = false;
        return initialNum;
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
    console.log("The operation done was " + initialNum + " " + operation + " " + modifyNum);

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
    if (initialNum === false){
        console.log("hello")
        displayBox.innerHTML = "ERR";
    }
    console.log("Result set to: " + initialNum);
    console.log("Operation set to: " + typeof(operation));
}

function setInitalNumber(op){
    if ((op !== "." && op !== "=") && !initalPart) {
        console.log("before opertion number: " + displayBox.innerHTML)
        initalPart = true;
        initialNum = Number(displayBox.innerHTML);
        operation = op;
        decimal = false;
        sliced = displayBox.innerHTML.length;
        console.log("Initial Number set: " + initialNum + " inside text: " + displayBox.innerHTML);
        
    }
}

function setModifyNumber(){
    if (initalPart){
        console.log(sliced + " sliced")
        modifyNum = Number(displayBox.innerHTML.slice(sliced+3));
        console.log("Display text: "+displayBox.innerHTML.slice(sliced+3));
        console.log("Modified number is: " + modifyNum);
        modifiyPart = true;
    }
}

function checkOperation(op) {

    // Do nothing if operation is same
    if (operation === op) {
        return;
    }

    if (operation !== false && op !== "." && op !== "=") {
        console.log("modified PART CHANGED")
        modifiyPart = true;
    }
    // Replace operation if modifyPart is false
    console.log("Operation is: "+ typeof(operation))
    if (op !== "." && op !== "=" && typeof(operation) !== "boolean") {
        if (modifiyPart){
            setModifyNumber(); 
            doOperation(operation);
        } else {
            let x = displayBox.innerHTML.slice(0,displayBox.innerHTML.length-3);
            displayBox.innerHTML = x;
        }

    }


    setInitalNumber(op);

    if (op !== "=" && op !== "."){
        console.log("Changed operation: " + op);
        decimal = false;
        sliced = displayBox.innerHTML.length;
        console.log(sliced + " CAHNGE")
        operation = op;
    }
    console.log("period " + decimal)
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
            if (!initalPart) {
                operation = false;
            }
            decimal = true;
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