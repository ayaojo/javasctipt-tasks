/* task 1 
let n = 2
function checkInterval(num, min = 0, max = 100) {
    return (num >= min && num <= max) ? 'yes' : 'no'
}
console.log(checkInterval(5, 0, 100));*/

/* task 2 
const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
for (const key in engineers) {
    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)
}*/

/* task 3 
const streetFood = ['hotdog', 'fries', 'humburger', 'chickenWings', 'nuggets']
for(let i = 1; i < streetFood.length; i+=2){
    console.log(streetFood[i])
}*/

/* task 4 
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (const index in numbers) {
    console.log(`Индексу ${index} соответствует число ${numbers[index]}`)
}*/

/* task 5 - это массив объектов
let questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }
]
for (const key of questions) {
    key.userAnswer = null
}
console.log(questions)*/

/* task 6 */
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
//6.1. for (const list of numbers) {console.log(list)}
//for (let i = 0; i < numbers.length; i++) {console.log(numbers[i])}

/*6.2. let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    console.log(sum)//floop sum
}
console.log(sum)//total all massiv */

//6.3.
let evenNumSum = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumSum += numbers[i]
    }
}
console.log(`Сумма четных чисел в массиве: ${evenNumSum}`)

/* task 7 */

/* task 8 */

/* task 9 */

/* task 10 */