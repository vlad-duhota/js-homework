'use strict';

// Я розбив завдання по функціцях, розкоментуйте щоб перевірити)

// call task1

// task1();

// call task2

// task2();

// call task3

// task3();

// call task4

task4();


function task1() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

function task2() {
    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0) {
            console.log(i + ' - парне число');
        } else {
            console.log(i + ' - не парне число');
        }
    }
}

function task3() {
    let num = 20;
    while (num < 28) {
        num++;
        console.log(num);
    }
}


function task4() {
    let hero = prompt("введіть ім'я героя");
    while(hero.length<6){
        console.log(hero);
        hero = prompt("введіть ім'я героя");
    }

    if(!hero.length<6){
        console.log('кількість букв менше 6');
    }

}

