const counter = ["1", "2", "3"]

// below was my original attempt
// function sum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         Number(arr)
//         if (arr === true) {
//             return arr[0] + arr[-1]
//         }
//     }
// }

// this is my corrected version
//I had a lot of help from my tech mentor to figure this out. The continue statement I learned from him. I'm not too familiar on it, but I will do more research.
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i])
    }
    return total
}

// let newArr = process.argv.slice(2);

const myNumbers = []

for (let i = 0; i < process.argv.length; i++) {
    if (i < 2) {
        continue
    }
    myNumbers[i - 2] = (Number(process.argv[i]))
}
console.log(sum(myNumbers));



//below is just code me and m tech mentor were trying out.
// delete myNumbers[2]; /* [0, 1, 2] */
// myNumbers.length = 2; 
/* [0, 1] {
    0: 1, 
    1: 2,
    length: 2,
    push: 
    pop:
    splice:
    prototype__: Array
} */