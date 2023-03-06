/*
Функция должна перебрать все дочерние элементы элемента where
и вернуть массив, состоящий из тех дочерних элементов
следующим соседом которых является элемент с тегом P
Рекурсия - по желанию
@param {Element} where - где искать
@return {Array<Element>}
 */

function findChildrenWithNextP(where) {
    const result = [];

    let current = where.firstElementChild;

    while (current !== null) {
        const next = current.nextElementSibling;

        if (next !== null && next.tagName === "P") {
            result.push(current);
        }
        current = next;
    }

    return result;
}

const where = document.getElementById("some-element");
const result = findChildrenWithNextP(where);
console.log(result)
