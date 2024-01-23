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

/* task 6 
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]*/
//6.1. for (const list of numbers) {console.log(list)}
//for (let i = 0; i < numbers.length; i++) {console.log(numbers[i])}

/*6.2. let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    console.log(sum)//floop sum
}
console.log(sum)//total all massiv 

//6.3.
let evenNumSum = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumSum += numbers[i]
    }
}
console.log(`sum even numbers: ${evenNumSum}`)

//6.4.
let maxNum = numbers[0]
for (const num of numbers) {
    if (num > maxNum) {
        maxNum = num
    }а
}console.log(`max number in massiv: ${maxNum}`);*/

/* task 7 
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i])//добавляет элементы в конец
    }
}console.log(newArr)*/

/* task 8 
let nums = [5, 4, 3, 8, 0]
let limit = 5
let newNums = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        newNums.push(nums[i])//добавляет элементы в конец
    }
}console.log(newNums)*/

/* task 9 
const users = [
    { name: 'Vasya', age: 23 },
    { name: 'Olya', age: 12 },
    { name: 'Anna', age: 22 },
    { name: 'Alex', age: 18 },
    { name: 'Valery', age: 8 }
]
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 15) {
        console.log(users[i].name);
    }
}*/

/* task 10 */
let vegetables = ["carrot", "potato", "tomato", "cucember"]
let newVegerables = []
for (let i = 0; i < vegetables.length; i++) {
    newVegerables.push(`word: ${vegetables[i]}, length: ${vegetables[i].length}`)
}

for (let i = 0; i < newVegerables.length; i++) {
    console.log(`${newVegerables[i]} - ${newVegerables[i].length}`);
}console.log(newVegerables)