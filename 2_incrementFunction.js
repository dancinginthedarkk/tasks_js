/*
Функция должна принимать число (если ничего не передано, то воспринимать
как 0) и возвращать новую функцию (foo). При вызове функции foo, переданное ранее число
должно быть увеличено на единицу и возвращено из foo
*/

function incrementFunction(num = 0) {
    return function foo() {
        num++;
        return num;
    }
}

const increment = incrementFunction(7);

console.log(increment());
console.log(increment());

