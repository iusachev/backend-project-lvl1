import name from './../src/cli.js'
import readlineSync from 'readline-sync';

console.log("Hello, " + name)
console.log('What number is missing in the progression?')

let count = 0

function makeArr (length, start, progress) {
    const arr = [start]
    for (let i = 0; i <= length; i++){
        arr.push(arr[arr.length-1]+progress)
    }
    return arr
}

while (count < 3) {
    let lengthArr = Math.floor(Math.random() * 5) + 4,
        beginArr = Math.floor(Math.random() * 10),
        progressArr = Math.floor(Math.random() * 9) + 1,
        silentPosition = Math.floor(Math.random() * lengthArr),
        array = makeArr(lengthArr,beginArr,progressArr),
        result = makeArr(lengthArr,beginArr,progressArr)[silentPosition]
    array[silentPosition]='..'
    let answer = readlineSync.question('Question: '+ array+' ')
        if (answer != result) {
            console.log(answer + " is wrong answer ;(. Correct answer was "+result+".")
            console.log("Let's try again, " + name)
            break
        }
    console.log('Your answer: ' + answer)
    console.log('Correct!')

   count ++
   if (count===3) {
    console.log("Congratulations, " + name)
}
}