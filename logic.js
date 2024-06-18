let operation = false;
let decimal = false
let initialNum = 0;
let modifyNum = 0;

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
}

const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(function(v){
    v.addEventListener("click",function(){
        let num = Number(v.innerHTML);
        if (num === 0 && Number(displayBox.innerHTML) === 0){
            return;
        }
        if (Number(displayBox.innerHTML) === 0 && !decimal) {
            displayBox.innerHTML = "";
        }
        displayNum(num);
    })
})

function doOperation(){

}

function checkOperation(op) {

    if (operation === op) {
        return;
    }

    if (modifyNum > 0) {
        doOperation();
    }
    if (op !== "." && op !== "=" && typeof(operation) !== "boolean") {
        let x = displayBox.innerHTML.slice(0,displayBox.innerHTML.length-3);
        displayBox.innerHTML = x;
    }
    if (!decimal || op !== "=" && modifyNum == 0) {
        initialNum = Number(displayBox.innerHTML);
    }

    operation = op;
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
}

const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach(function(v){
    let operation = v.innerHTML;
    v.addEventListener("click",function(){
        checkOperation(operation);
    })
    
})