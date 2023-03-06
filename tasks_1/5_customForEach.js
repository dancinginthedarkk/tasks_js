// Напишите аналог встроенного метода forEach для работы с массивами

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [1, 2, 3, 4, 5];

customForEach(numbers, function(num, index, array) {
    console.log(`index: ${index}, number: ${num}, array: ${array}`);
});
