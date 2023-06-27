// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
// Дан массив, состоящий из названий фильмов, перебрать массив с выводом названий каждого фильма в консоль
const arrMovie = ['King', 'Interpreter', 'Taxi', 'Fauda'];
arrMovie.forEach(el => console.log(el));
// 2. Given an array of car manufacturers, convert the array to a string and back to an array
// Учитывая массив производителей автомобилей, преобразовать массив в строку и обратно в массив

const carManufacturer = ['Honda', 'Ford', 'Nissan', 'Audi', 'Toyota',];
let carM = carManufacturer.join();
console.log(carM);
carM = carM.split();
console.log(carM);

// 3. Given an array of the names of your friends, add the words hello to each element of the array
let myFrinds = ['Mike', 'Segey', 'Alexander', 'Nicholas',];
let greetings = myFrinds.map(el => 'Hi ' + `${el}`);
console.log(greetings);

// 4. Convert numeric array to Boolean
let arr = [1, 0, 7, 8,];
let arr2 = arr.map(el => new Boolean(el));
console.log(arr2);

// 5.Sort the array [1,6,7,8,3,4,5,6] in descending order
// Отсортируйте массив [1,6,7,8,3,4,5,6] в порядке убывания
const sortArr = [1, 6, 7, 8, 3, 4, 5, 6];
sortArr.sort((b, a) => a - b);
console.log(sortArr);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
// Массив фильтров [1,6,7,8,3,4,5,6] по значению> 3
const arrNum = [1, 6, 7, 8, 3, 4, 5, 6];
const filterArr = arrNum.filter(el => el > 3);
console.log(filterArr);

// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
//  Напишите функцию, которая принимает два параметра — массив и число и выводит индекс элемента массива, равный числу
function indexElmentArrya(array, number) {
    let result;
    return result = array.forEach((el, ind) => el == number ? console.log(ind) : '');
};
indexElmentArrya(arrNum, 3);
// 8. Implement a loop that will print the number 'a' until it is less than 10
// Реализовать цикл, который будет печатать число «а», пока оно не станет меньше 10
for (let i = 12; i >= 10; i--) {
    console.log(i);
};
// 9. Implement a loop that prints prime numbers to the console
// Реализовать цикл, выводящий на консоль простые числа.
let num = 7;
cont: for (let i = 2; i <= num; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k == 0) {
            continue cont;
        };
    };
    console.log(i);
};
// 10. Implement a loop that prints odd numbers to the console
// Реализовать цикл, выводящий на консоль нечетные числа.
let n = 8;
for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
        console.log(i);
    };
};

