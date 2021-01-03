import name from './../src/cli.js'
import readlineSync from 'readline-sync';

console.log("Hello, " + name)
console.log('Find the greatest common divisor of given numbers.')

let cicle =0

function gcd(a, b) {
    while (b !== 0) b = a % (a = b);
    return a;
    }

while (cicle < 3) {
    let a = Math.floor(Math.random() * 20) + 1,
        b = Math.floor(Math.random() * 20) + 1,
        answer = readlineSync.question('Question: ' + a + ' ' + b + "  ")

    if (gcd(a,b) != answer ) {
            console.log('Your answer: ' + answer)
            console.log(answer + 'is wrong answer ;(. Correct answer was ' + gcd(a,b))
            console.log("Let's try again, " + name)
            break
        }
    console.log('Your answer: ' + answer)
    console.log('Correct!')
    cicle++

if(cicle===3) {
    console.log('Congratulations, ' + name)
}
}

