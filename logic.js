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
}

const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach(function(v){
    v.addEventListener("click",function(){
        let num = Number(v.innerHTML);
        displayNum(num);
    })
})

function checkOperation(op) {
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
            displayNum(" = ");
            break;
        case ".":
            displayNum(". ");
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