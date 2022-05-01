'use strict';

// Я розбив завдання по функціцях, розкоментуйте щоб перевірити)

// call task1

// task1();

// call task2

// task2();

// call task3

// task3();

// call task4

// task4();

// call task5

// task5();

// call task6

// task6();

// call task7

// task7();

// call task 8

task8();


function task1() {
    const k1 = parseInt('5px');
    const k2 = parseInt('12djd334');
    const k3 = parseInt('12.45asdwe12');
    const k4 = parseInt('qwqweeewq');

    console.log(k1, k2, k3, k4);
}

function task2() {
    const c1 = parseFloat('5px');
    const c2 = parseFloat('12djd334');
    const c3 = parseFloat('12.45asdwe12');
    const c4 = parseFloat('qwqweeewq');

    console.log(c1, c2, c3, c4);
}

function task3() {
    console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
    console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
}


function task4() {
    const random = Math.random() * (19 - 3) + 3;
    alert(random);
}

function task5() {
    const result = 5 + 5 + '5';
    console.log(result, typeof result);
}

function task6() {
    const email = 'vlad@gmail.com';
    const isValid = email.includes('@');
    const symbolsQuantity = email.length;
    console.log(isValid, symbolsQuantity);
}

function task7() {
    const a = 'My ';
    const b = 'name ';
    const c = 'is ';
    const fullName = a + b + c + 'Vlad';
    console.log(fullName)
}

function task8(){
    const userName = 'Влад';
    const payment = 400;
    const message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
    alert(message);
}