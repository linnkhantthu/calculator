const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '/', '*']
const others = ['=', 'AC']
var temp = ""
let num_1
let op
let final_result
let history = ""

var result = document.getElementById("result")
var history_tag = document.getElementById("history")

function calculate(input){
    history += input
    history_tag.innerHTML = history
    if(final_result){
        temp = final_result.toString()
        final_result = undefined
    }
    if(numbers.includes(input)){
        // user inserted a number
        temp += input
        result.value = temp
    }
    else if(operators.includes(input)){
        // user inserted an operator
        if(op){
            
        }
        else{
            if(num_1){
                num_1 = operate(num_1, parseInt(temp), op)    
            }
            else{
                num_1 = parseInt(temp)
            }
            op = input
            temp = ""
            console.log(num_1)
            result.value = num_1
        }
    }
    else{
        if(input == '='){
            num_1 = operate(num_1, parseInt(temp), op)
            final_result = num_1
            temp = ""
            num_1  = undefined
            op = undefined
            history += final_result.toString()
            history_tag.innerHTML = history
            history = ""
            result.value = final_result
            final_result = undefined
        }
        else{
            reset()
        }
    }
}

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
        
        default:
            break;
    }
}
function reset(){
    temp = ""
    num_1  = undefined
    op = undefined
    result.value = ""
    history = ""
    history_tag.innerHTML = history
}