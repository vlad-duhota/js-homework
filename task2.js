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

// task8();





// task 1
function task1() {
    const username = prompt("Введіть ім'я");
    console.log(username);
}

// task 2
function task2() {
    const age1 = 13;
    const age2 = 14;
    alert(age1 + age2);
}

// task 3
function task3() {
    const a = +prompt("First number");
    const b = +prompt("Second number");
    console.log(a * b);
}

// task 4
function task4() {
    let a1 = 5 + 3;
    let a2 = 5 - 3;
    let a3 = 5 * 3;
    let a4 = 5 / 3;

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
}

// task 5

function task5() {
    let a5 = 5 % 3;
    let a6 = 3 % 5;
    let a7 = 5 + '3';
    let a8 = '5' - 3;
    let a9 = 75 + 'кг';

    alert(a5);
    alert(a6);
    alert(a7);
    alert(a8);
    alert(a9);
}

// task6

function task6() {
    let height = 23;
    let width = 10;
    let s = height + width;
    alert(s);
}

// task 7

function task7(){
    const heightC = 10;
    const dC = 4;
    const v = Math.PI * (dC / 2) ** 2 * heightC;
    console.log(v);
}

// task 8

function task8(){
    // sqrt(pow(a, 2) + pow(b, 2)
    const n = 3;
    const m = 4;
    const k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
    alert(k);

}
