function display(val)
{
    if (document.getElementById("result").value.charAt(0) == '0') {
        document.getElementById("result").value = val;
    } else {
        document.getElementById("result").value += val;
    }
    
}
  
function solve()
{

    let error = 0;
    let pow = 0;
    let firstNumber = document.getElementById("result").value;
    let res = document.getElementById("result");

    if (firstNumber.includes("++") || firstNumber.includes("--") || firstNumber.includes("**") || firstNumber.includes("//")) {
        error++;
    }

    for (var i = 0; i < firstNumber.length; i++) {
        if (firstNumber.charAt(i) == '^') {
            pow++;
        }
    }

    if(error != 0) {
        document.getElementById("result").value="ERROR";
    } else if (pow > 1) {
        document.getElementById("result").value="ERROR";
    } else if (pow == 1) {
        let index = firstNumber.indexOf('^');
        if (index == 0) {
            document.getElementById("result").value="ERROR";
        } else {
        var firstNum = eval(firstNumber.substring(0, index));
        var secondNum = eval(firstNumber.substring(index + 1));
        document.getElementById("result").value = Math.pow(firstNum, secondNum);
        }
    } else {
        let firstNumber = document.getElementById("result").value
        let secondNumber = eval(firstNumber)
        document.getElementById("result").value = secondNumber
    }
}
  

function emptyValue()
{
    document.getElementById("result").value = "0"
}

function reciprocal()
{
    
    let res = document.getElementById("result").value;
    let i;
    for (i = res.length; i >= 0; i--) {
        if (res.charAt(i) == "+" || res.charAt(i) == "/" || res.charAt(i) == "*" || res.charAt(i) == "-") {
            break;
        }
    }

    let thirdNumber = document.getElementById("result").value.substring(i);
    thirdNumber = eval(1 / thirdNumber);
    let fourthNumber = document.getElementById("result").value.substring(0, i + 1);
    let fifthNumber = fourthNumber + thirdNumber;
    document.getElementById("result").value = eval(fifthNumber);

    

}

function sqrt()
{
    let res = document.getElementById("result").value;
    let i;
    for (i = res.length; i >= 0; i--) {
        if (res.charAt(i) == "+" || res.charAt(i) == "/" || res.charAt(i) == "*" || res.charAt(i) == "-") {
            break;
        }
    }

    let thirdNumber = document.getElementById("result").value.substring(i);
    thirdNumber = Math.sqrt(thirdNumber);
    let fourthNumber = document.getElementById("result").value.substring(0, i + 1);
    let fifthNumber = fourthNumber + thirdNumber;
    document.getElementById("result").value = eval(fifthNumber);
}

function log()
{
    let res = document.getElementById("result").value;
    let i;
    for (i = res.length; i >= 0; i--) {
        if (res.charAt(i) == "+" || res.charAt(i) == "/" || res.charAt(i) == "*" || res.charAt(i) == "-") {
            break;
        }
    }

    let thirdNumber = document.getElementById("result").value.substring(i);
    thirdNumber = Math.log2(thirdNumber);
    let fourthNumber = document.getElementById("result").value.substring(0, i + 1);
    let fifthNumber = fourthNumber + thirdNumber;
    document.getElementById("result").value = eval(fifthNumber);
}

function pow(val)
{
    document.getElementById("result").value+=val;
}