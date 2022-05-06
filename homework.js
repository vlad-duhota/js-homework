const username = prompt("Введіть ім'я користувача");
const password = prompt("Введіть пароль користувача");
const admin_username = 'admin';
const admin_password = 'admin';


if (username === admin_username && password === admin_password) {
    alert('Вітаю адміне');
} else if (username && password && username !== admin_username) {
    alert(`Вітаю ${username}`)
} else {
    alert('Такого користувача не існує')
}
