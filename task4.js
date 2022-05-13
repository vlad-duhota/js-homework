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

task5();

function task1() {
    const num = +prompt('введіть число');
    if (num >= 55 && num <= 99) {
        console.log('Число потрапляє в діапазон');
    } else {
        console.log('Число не потрапляє в діапазон');
    }
}

function task2() {
    const age = +prompt('введіть вік');
    if (age <= 16) {
        alert('група діти');
    } else if (age > 16 && age <= 60) {
        alert('група дорослі');
    } else {
        alert('група пенсіонери');
    }

}

function task3() {
    const name = prompt("введіть ім'я");
    const surname = prompt('введіть прізвище');
    const all = name + ' ' + surname;
    if (name.length > 4 && surname.length > 5) {
        console.log(all);
        console.log(name + ' - ' + name.length);
        console.log(surname + ' - ' + surname.length);
        console.log(name.length + ' + ' + surname.length + ' = ' + (name.length + surname.length));
        console.log(all + ' - ' + (name.length + surname.length));
    } else {
        console.log("Упс, ім'я або прізвище занадто коротке");
    }
}


function task4() {
    const random_number = Math.round(Math.random() * (5 - 1) + 1);
    if (random_number === 1) {
        alert('число дорівнює 1');
    } else if (random_number === 2) {
        alert('число дорівнює 2');
    } else if (random_number === 3) {
        alert('число дорівнює 3');
    } else if (random_number === 4) {
        alert('число дорівнює 4');
    } else if (random_number === 5) {
        alert('число дорівнює 5');
    }
}


function task5() {
    const lang = prompt('введіть мову');
    if (lang === 'ua' || lang === 'en' || lang === 'ru' || lang === 'fr') {
        switch (lang) {
            case 'ua':
                console.log('Січень');
                break;

            case 'en':
                console.log('January');
                break;

            case 'ru':
                console.log('Январь');
                break;

            case 'fr':
                console.log('Janvier');
                break;
        }

    } else {
        console.log('ця мова не доступна');
    }
}