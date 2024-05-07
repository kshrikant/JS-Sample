const n1 = ["Sh", "Na", "T"]
const n2 = ["dfs", "dfg", "wef"]

// n1.push(n2) // will append directly array not elements


// console.log(n1);

//concat will add only elements - new arry


// Spread operator -
// to spreaad the elements of array

const sp = [...n1, ...n2]
// console.log(sp);
const arrayn = [1,2, [23,5343, [23,343]], [89, 90]]

const flatArray = arrayn.flat(Infinity)
// console.log(flatArray);

// const test = Array.from("Shrikn")
// console.log(test);
const test = Array.from({name:"Shrikant"})
// console.log(test);
console.log(Array.of(1,2,3));
