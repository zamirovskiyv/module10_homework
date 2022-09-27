// ----- Задание 8----- 

let myMap = new Map();

myMap.set('key', 'prop');
myMap.set('1', 'prop2');
myMap.set(true, '123');

for (let name of myMap.keys()) {
    console.log('Ключ — ' + name + ', значение — ' + myMap.get(name));
}