/*
Функция должна вернуть Promise, который должен быть разрешен массивом
пользователей, загруженным из
https://jsonplaceholder.typicode.com/users
На выходе нужно создать массив объектов с именем пользователя и его городом.
Элементы полученного массива должны быть отсортированы по имени пользователя
 */

import fetch from 'node-fetch';

function getUsers() {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return users.map(user => {
                return { name: user.name, city: user.address.city };
            }).sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
        });
}

getUsers()
    .then(result => console.log(result));
