function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)


// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage(5))

//... rest operator same is used in array called spread operator

// function calculateCartPrice(...num1){
//     return num1
//     //[ 200, 400, 500, 2000 ]
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))


//will drop 200 from array as we mentioned val1 
function calculateCartPrice(val1, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    name: "shriksn",
    id: "10"
}

// objectFunction(user)

function objectFunction(anyobject) {

console.log(anyobject.name, anyobject.id);
}


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));