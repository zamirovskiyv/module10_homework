// ----- Задание 3-----

let str = 'Hello';

console.log(reverseString(str));

function reverseString(str) {
    return str.split("").reverse().join("");
}


// ----- Задание 4-----

console.log(Math.round(Math.random() * 100));