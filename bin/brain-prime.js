import name from './../src/cli.js'
import readlineSync from 'readline-sync';

console.log("Hello, " + name)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

let count = 0


function checkPrime(x){
    let y = 'yes',
        n = 'no',
        c = 0;

        for ( let i = 2; i<x; i++){
            if (x%i===0){
                c++
            }
        }
 if (c === 0 ) {
     return n
 }
 else return y
}

while (count<3){
    let number = Math.floor(Math.random() * 35) + 1,
        answer = readlineSync.question('Question: '+ number+' '),
        result = checkPrime(number)

        if (answer != result) {
            console.log( answer + ' is wrong answer ;(. Correct answer was ' + result)
            console.log("Let's try again, " + name)
            break
            }
        console.log('Your answer: ' + answer)
        console.log('Correct!')
 count++
 if (count===3) {
    console.log("Congratulations, " + name)
}
}