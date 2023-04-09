/*
Функция должна создавать Promise, который должен быть resolved через seconds
секунду после создания
@param {number} seconds - количество секунд, через которое Promise должен быть
resolved
@return {Promise}
 */
function createPromise(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("ok");
        }, seconds * 1000);
    });
}

createPromise(3)
    .then(result => {console.log(result)});
