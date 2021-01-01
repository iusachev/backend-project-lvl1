import name from './../src/cli.js'
import readlineSync from 'readline-sync';

console.log("Hello, " + name)
console.log('What is the result of the expression?')

let cicle = 0;


while (cicle < 3) {
    let number1 = Math.floor(Math.random() * 30) + 1,
        number2 = Math.floor(Math.random() * 30) + 1,
        operation =  Math.floor(Math.random() * 2) + 1

    if (operation===1) {
                let answer = readlineSync.question('Question: ' + number1 + '+' + number2 + "  ")
                let result = number1 + number2
                if (answer != result){
                    console.log("Your answer: " + answer)
                    console.log(answer + ' is wrong answer ;(. Correct answer was ' + result + '.')
                    console.log("Let's try again, " + name)
                    break
                }
                console.log("Your answer: " + answer)
                console.log("Correct!")
                cicle++
            }
    if (operation===2){
                let answer = readlineSync.question('Question: ' + number1 + '*' + number2 + "  ")
                let result = number1 * number2
                if (answer != result){
                    console.log("Your answer: " + answer)
                    console.log(answer + ' is wrong answer ;(. Correct answer was ' + result + '.')
                    console.log("Let's try again, " + name)
                    break
                }
                console.log("Your answer: " + answer)
                console.log("Correct!")
                cicle++
            }
    if (operation===3){
                let answer = readlineSync.question('Question: ' + number1 + '-' + number2 + "  ")
                let result = number1 - number2
                if (answer != result){
                    console.log("Your answer: " + answer)
                    console.log(answer + ' is wrong answer ;(. Correct answer was ' + result + '.')
                    console.log("Let's try again, " + name)
                    break
                }
                console.log("Your answer: " + answer)
                console.log("Correct!")
                cicle++
            }
if(cicle===3){
    console.log('Congratulations, ' + name)
}
}