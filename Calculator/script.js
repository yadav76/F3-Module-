
function calculate() {
    var numOne = document.getElementById("firstNumber").value;

    var numTwo = document.getElementById("secondNumber").value;

    var operator = document.getElementById("operator").value;

    var result = 0; 

    if (operator == "+") {
        result = numOne + numTwo;
    }else if (operator == "-") {
        result = numOne - numTwo;
    }else if (operator == "*") {
        result = numOne * numTwo;
    }else {
        result = numOne / numTwo;
    }

    var ans = document.getElementById("result");

    ans.innerText = result;

    ans.style.display = "block";
}

function clear() {
    document.getElementById("firstNumber").innerContent = "";

    var numTwo = document.getElementById("secondNumber").innerContent= "";

    var operator = document.getElementById("operator").innerText = "Addition";
}