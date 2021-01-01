import name from './../src/cli.js'
import readlineSync from 'readline-sync';

console.log("Hello, " + name)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let a = 0;
while (a<3) {
    let number = Math.floor(Math.random() * 15) + 1
    let answer = readlineSync.question('Question: 'Math.ceil(number))

    if (number % 2 === 0 && answer === 'no' ) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.")
    console.log("Let's try again, " + name)
    break
    }
    if (number % 2 === 1 && answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
        console.log("Let's try again, " + name)
    break
    }
    console.log('Your answer: ' + answer)
    console.log('Correct!')
    a++
}
if (a===3) {
    console.log("Congratulations, " + name)
}

