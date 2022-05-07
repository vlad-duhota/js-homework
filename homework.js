let username = prompt("Введіть ім'я користувача");
let password = prompt("Введіть пароль користувача");
const admin_username = 'admin';
const admin_password = '12345678';


let condition = username === admin_username && password === admin_password;

 while (!condition){
     alert('дані не вірні');
    username = prompt("Введіть ім'я користувача");
    password = prompt("Введіть пароль користувача");
    condition = username === admin_username && password === admin_password;
 }

 if(condition){
     alert('Вітаю адміне');
 }
