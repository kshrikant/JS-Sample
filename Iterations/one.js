
let array = ["SHri", "Kant", "Vilas", "Knakatti"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(`THe index is ${index}, and item is ${element}`);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Break Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`COnti Value of i is ${index}`);
    
}