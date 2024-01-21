/* task 1
const country = 'Sweden'
let access = (country === 'Sweden' ? true : false)
console.log(access)*/

/* task 2 
let num = 10
for (let i = 0; i < 10; i++){
    num++ //num += 1
}
console.log(num)*/

/* task 3 
for (let i = 0; i <= 8; i += 2) {
    const userNum = +prompt('your number: ')
    console.log(userNum === 10 ? "equal 10" : "not equal 10")
}*/

/* task 4 
const userAnswer = +prompt("Enter the number of numbers: ");
for (let i = 0; i < userAnswer && i < 100; i++) {
    console.log(i ** 2);
}*/

/* task 5 
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 ) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}*/

/* task 6 || while - думает, потом проверяет || do while - делает, потом проверяет
let i = 0
while (i < 3) {
    i++
    alert(`number ${i}!`)
}

//do while syntax
do{
    i++
    console.log(`number ${i}!`)
} while (i < 3)*/

/* task 7 
function squareNumber(limit) {
    for (let i = 0; i < limit && i < 100; i++) {
        console.log(i**2)
    }
}
squareNumber(5)*/

/* task 8 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRGBColor(num1, num2, num3) {
    return `rgb ${num1}, ${num2}, ${num3}`
}

const randomNum1 = getRandomInteger(0, 255)
const randomNum2 = getRandomInteger(0, 255)
const randomNum3 = getRandomInteger(0, 255)

const result = generateRGBColor(randomNum1, randomNum2, randomNum3)
console.log(result)*/

/* task 9 
function checkNumInfo(n) {
    for (let i = 1; i < n; i += 0.5) {
        console.log(`${i} ${Number.isInteger(i) ? 'integer' : 'decimal'}`)
    }
}
checkNumInfo(3)*/

/* task 10 */
function calcPrice(rentDays) {
    const rentCost = 40
    if (rentDays >= 3 && rentDays < 7) {
        console.log(`your discount: $20. car rent costs $${rentDays * rentCost - 20}`)
    } else if (rentDays >= 7) {
        console.log(`your discount: $50. car rent costs $${rentDays * rentCost - 50}`)
    } else {
        console.log(`car rent costs $${rentCost}`)
    }
}
calcPrice(3)