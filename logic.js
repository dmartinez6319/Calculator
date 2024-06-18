let operation = false;
let initialNum = 0;

function addNum() {

}

function subNum() {

}

function multNum() {

}

function divNum() {

}

function decimalNum() {

}



const displayBox = document.getElementById("display");
function displayNum(num) {
    displayBox.innerHTML += num
}

function clearOut() {
    displayBox.innerHTML = "";
    operating = false;
    initialNum = 0;
}

const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(function(v){
    v.addEventListener("click",function(){
        let num = Number(v.innerHTML);
        displayNum(num);
    })
})

function checkOperation(op) {

    if (operation === op) {
        return;
    }
    if (op !== "." && op !== "=" && typeof(operation) !== "boolean") {
        let x = displayBox.innerHTML.slice(0,displayBox.innerHTML.length-3);
        displayBox.innerHTML = x;
    }

    // initialNum = Number(displayBox.innerHTML);
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