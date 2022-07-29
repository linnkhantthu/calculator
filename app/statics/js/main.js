const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '/', '*']
const others = ['=', 'AC']

let temp = "" // To store numbers till we got operator signs
let num_1// When we got operator we transfer data from "temp" to "num_1"
let op // To store operator
let history = "" // To store history
let isPreviousResult = false

var result = document.getElementById("result") // Reslut field
var history_tag = document.getElementById("history") // History label

function calculate(input){
    const isNumber = numbers.includes(input)
    const isOperator = operators.includes(input)
    work = isNumber ? "number": (isOperator ? "operator": "others")
    setHistory(input)
    switch (work) {
        case "number":
            isPreviousResult = op ? true : false
            temp += input
            setResult(temp)
            break;
        case "operator":
            num_1 = isPreviousResult ? num_1: parseFloat(temp) // Transferring data from temp to num_1
            num_1 = op ? operate(num_1, parseFloat(temp), op): num_1
            
            result.value = op ? (num_1 ? num_1: result.value): result.value

            temp = "" // Clearing temp
            op = input // We got our operator
            break;
        case "others":
            if(input == "="){
                num_1 = operate(num_1, parseFloat(temp), op)
                setResult(num_1)
                isPreviousResult = true
                temp = ""
                op = undefined
                setHistory(num_1 + ",")
            }
            else{
                reset()
            }
            break;
    }
}

// To make operations
function operate(num_1, num_2, op){
    switch (op) {
        case '+':
            return num_1 + num_2;
        case '-':
            return num_1 - num_2;
        case '*':
            return num_1 * num_2;
        case '/':
            return num_1 / num_2;
    }
}

// When we pressed "AC" this function will be called
function reset(){
    temp = ""
    num_1 = undefined
    op = undefined
    history = ""

    result.value = ""
    history_tag.innerHTML = ""
}

function setResult(value){
    result.value = value
}

function setHistory(value){
    history_tag.innerHTML += value
}