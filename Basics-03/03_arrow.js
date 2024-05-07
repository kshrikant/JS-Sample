const user = {
    username: "hitesh",
    price: 999,
//to use current context - use this
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     // console.log(this.username); //undefined
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

// chai()

// () => {} Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit arrow func
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(10,20));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()