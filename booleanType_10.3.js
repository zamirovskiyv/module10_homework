// ----- Задание 1----- 

let keyIn, z;

keyIn = prompt('Enter any number:');

z = +keyIn;

if (isNamber(z)) {
   if (z % 2 == 0) {
      console.log('Четное число');

   } else {
      console.log('нечетное число');
   }
} else {
   console.log('Упс, кажется, вы ошиблись');
}

// ----- Задание 2----- 

let num;

num = 5;

if (isBoolean(num)) {
   console.log('Boolean');
} else

if (isNamber(num)) {
   console.log('Number');
} else {
   console.log('String');
}

function isBoolean(val) {
   return val === false || val === true;
}

// Function for task-1 and tast-2

function isNamber(value) {
   if (value instanceof Number)
      value = value.valueOf();

   return isFinite(value) && value === parseInt(value, 10);
}