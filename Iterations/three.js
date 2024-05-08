const arr = [1, 2, 3, 4, 5]

for (const numb of arr) {
    // console.log(numb);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


const msp = new Map()
msp.set("name", "Shriksny")
msp.set("add", "daji")
msp.set("id", 10)

for (const [key, value] of msp) {
    // console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of msp) {
    console.log(key, ':-', value);
}