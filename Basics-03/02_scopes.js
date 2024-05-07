//var c = 300
let a = 300

if (true) {
    a = 10
    const b = 20
    // console.log("INNER: ", a);
}

//If we use var will get be accessed outside the scope as well. vs const and let will not be accessed

// console.log(a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }


const addTwo = function(num){
    return num + 2
}



console.log(addTwo(5))