console.time("concatenation")

// const fizzBuzz = () => {
//     for (let i = 0; i <= 20; i++) {
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log("fizz buzz")
//         } else if (i % 3 == 0) {
//             console.log("fizz")
//         } else if (i % 5 == 0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()

const fizzBuzzRecursive = (i, num) => {
    if (i <= num) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizz buzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
        fizzBuzzRecursive(i + 1, num)
    }
}

fizzBuzzRecursive(1, 20)

console.timeEnd("concatenation")