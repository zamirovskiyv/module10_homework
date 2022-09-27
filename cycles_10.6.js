// ----- Задание 6----- 

// let arr = [2, 4, 6, 8, 10];
var arr = [2, 4, 6, 5, 4];


function delDublicates(arr) {
    return new Set(arr).size !== arr.length;
}

console.log('Dublicates: ' + delDublicates(arr));


// ----- Задание 7----- 

let arr2 = [4, 2, null, 7, 'a', ''];

let evenCount = 0,
    oddCount = 0,
    otherValues = 0;

for (let i = 0; i < arr2.length; i++) {
    if (isNamber(arr2[i])) {
        if (arr2[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    } else {
        otherValues++;
    }
}

console.log('Event:' + evenCount);
console.log('Odd:' + oddCount);
console.log('Other:' + otherValues);

function isNamber(value) {
    if (value instanceof Number)
        value = value.valueOf();

    return isFinite(value) && value === parseInt(value, 10);
}