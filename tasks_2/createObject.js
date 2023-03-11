/*
Функция имеет параметр number (по умолчанию - 0)
Функция должна вернуть объект, у которого должно быть несколько методов:
- sum - складывает number с переданными аргументами
- dif - вычитает из number переданные аргументы
- div - делит number на первый аргумент. Результат делится на следующий аргумент
(если передан) и так далее
- mul - умножает number на первый аргумент. Результат умножается на следующий
аргумент (если передан) и так далее
Количество передаваемых в методы аргументов заранее неизвестно
Необходимо выбрасывать исключение в случаях:
- number не является числом (с текстом "number is not a number")
- какой-либо из аргументов div является нулем (с текстом "division by 0")
 */

function createObject(number = 0) {
    if (typeof number !== "number") {
        throw new Error("number is not a number");
    }

    let obj = {
        sum: function (...args) {
            let sum = number;
            for (let arg of args) {
                sum += arg;
            }
            return sum;
        },
        dif: function (...args) {
            let dif = number;
            for (let arg of args) {
                dif -= arg;
            }
            return dif;
        },
        div: function (...args) {
            let div = number;
            for (let arg of args) {
                if (arg === 0) {
                    throw new Error("division by 0");
                }
                div /= arg;
            }
            return div;
        },
        mul: function (...args) {
            let mul = number;
            for (let arg of args) {
                mul *= arg;
            }
            return mul;
        },
    };

    return obj;
}

const obj = createObject(10);
console.log(obj.sum(5, 6));
console.log(obj.dif(4, 3));
console.log(obj.div(0, 5));
console.log(obj.mul(2, 3, 4));
