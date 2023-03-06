/*
Функция принимает заранее неизвестное количество аргументов, первым из которых
является функция fn
Функция должна поочередно запусти fn для каждого переданного аргумента (кроме
самой fn)
Функция должна вернуть массив аргументов, для которых fn выбросила исключение
Необходимо выбрасывать исключение в случаях:
- fn не является функцией (с текстом "fn is not a function")
 */

function functionErrors(fn, ...args) {
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    const errors = [];

    for (let i = 0; i < args.length; i++) {
        try {
            fn(args[i]);
        } catch (err) {
            errors.push(args[i]);
        }
    }

    return errors;
}

let functionNumber = function (n) {
    if (n < 0){
        throw new Error(`${n} is negative`)
    }
};

console.log(functionErrors(functionNumber, 1, 2, -3, -4, 5, 6));


