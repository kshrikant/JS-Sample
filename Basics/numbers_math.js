const score = 400
console.log(score.toString);
// const balance = new Number(40)
// console.log(balance.toString());

const balance = 100.12323 
// used for how many values after decimal
balance.toFixed(2) // 100.12
// used for how many values to take in total (priority is before decimal)
balance.toPrecision(4) // 100.1 (returns a string)
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // inserts commas
// balance.toString()

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
console.log((Math.random()*10) + 1);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

  console.log(`Randomm ${getRndInteger(200, 300)}`);