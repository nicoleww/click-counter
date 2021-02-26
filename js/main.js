// app state var

let result = 0;

//cached elements

let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let input = document.getElementById("input");
let count = document.getElementById("count");

//event listeners

window.onload = init;
plusBtn.addEventListener("click", addNum);
minusBtn.addEventListener("click", minusNum);

//functions

function init() {
    count.innerHTML = `${result}`;
    document.getElementById("input").value = "1";
}

function minusNum() {
    let inputNum = document.getElementById("input").value;
    let inputNumParse = parseInt(inputNum);
    result = (result - inputNumParse);
    count.innerHTML = `${result}`;
    if (result < 0) {
        count.style.color = "red";
    }
}

function addNum() {
    let inputNum = document.getElementById("input").value;
    let inputNumParse = parseInt(inputNum);
    result = (result + inputNumParse);
    count.innerHTML = `${result}`;
}