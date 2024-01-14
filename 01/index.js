// task 1
/* const userName = prompt("Your name:")
console.log(alert(`Hello, ${userName}!`)) */

// task 2
/* const num = prompt("your number:")
const extent = prompt("degree of the number:")
console.log(num**extent) */

// task 4
/* let text = "my text"
if (text === "some text") {
    text = "another text"
} else {
    text = "some text"
}
console.log(text) */

// task 5
/* let num = 6
if (num === 0) {
    num = 1
} else if (num < 0) {
    num = "less then zero"
} else {
    num *= 10
}
console.log(num) */

// task 6
/* const num = Number(prompt("your number:"))
let result
if (Number.isNaN(num) === true) {
    console.log("enter number");
} else if (num < 5) {
    result = 0
} else {
    result = 1
}
console.log(result) */

// task 7
/* const num1 = Number(prompt("your first number:"))
const num2 = Number(prompt("your second number:"))
if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
    console.log("enter number");
} else if (num1 > num2) {
    console.log(`Biggiest number: ${num1}`)
} else if (num1 < num2) {
    console.log(`Biggiest number: ${num2}`)
} else {
    console.log(`They are same`)
}*/

// task 8
/* const num1 = prompt("first number:")
const num2 = prompt("second number:")
if (num1 % num2 === 0){
    console.log(`${num1} multiple ${num2}`)
} else {
    console.log(`${num1} not multiple ${num2}`)
} */

// task 9
/* const averageScore = Number(prompt("your GPA:"))
if (averageScore >= 1 && averageScore <= 4){
    console.log("You stupid, sorry. it's not my fault")
} else if (averageScore >= 5 && averageScore <= 8){
    console.log("ok, but don't be lazzy ")
} else if(averageScore >= 9 && averageScore <= 10){
    console.log("Great job!")
} else{
    console.log("write your GPA!!!")
} */

// task 10
/* const examScore = prompt("your score for of exam (0-100):")
const projectNum = prompt("number of completed projects ( 0 and more):")
if (examScore > 90 || projectNum > 10){
    console.log("your graduation score - 100")
} else if (examScore > 75 && projectNum > 5){
    console.log("your graduation score - 90")
}else if (examScore > 50 && projectNum > 2){
    console.log("your graduation score - 75")
} else {
    console.log("your graduation score - 0")
} */

// task 11
const rentCost = 40
const rentDays = prompt("the number of days for which you need to rent a car")
if (rentDays >= 3 && rentDays < 7) {
    console.log(`your discount: $20. car rent costs $${rentDays * rentCost - 20}`)
} else if (rentDays >= 7) {
    console.log(`your discount: $50. car rent costs $${rentDays * rentCost - 50}`)
} else {
    console.log(`car rent costs $${rentCost }`)
}