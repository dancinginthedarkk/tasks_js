/*
Выполнить предудыщее задание с использование рекурсии
то есть необходимо заходить внутрь каждого дочернего элемента
@param {Element} where - где искать
 */

function removeTextNodesRec(where) {
    for (let i = 0; i < where.childNodes.length; i++) {
        if (where.childNodes[i].nodeType === Node.TEXT_NODE) {
            where.removeChild(where.childNodes[i]);
            i--;

        } else if (where.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            removeTextNodesRec(where.childNodes[i]);
        }
    }
}

const where = document.getElementById("some-element");
removeTextNodesRec(where);
