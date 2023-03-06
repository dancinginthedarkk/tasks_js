// Функция должна принимать другую функцию и возвращать результат вызова этой функции

function sayHello() {
    return "Hello!";
}

function callFunc(func) {
    return func();
}

console.log(callFunc(sayHello));
