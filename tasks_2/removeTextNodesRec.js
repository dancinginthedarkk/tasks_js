/*
Выполнить предудыщее задание с использование рекурсии
то есть необходимо заходить внутрь каждого дочернего элемента
@param {Element} where - где искать
 */

function removeTextNodesRec(where) {
    let child = where.firstChild;

    while (child) {
        if (child.nodeType === Node.TEXT_NODE) {
            where.removeChild(child);
            child = where.firstChild;

        } else if (child.nodeType === Node.ELEMENT_NODE) {
            removeTextNodesRec(child);
            child = child.nextSibling;
        }
    }
}

const where = document.getElementById("some-element");
removeTextNodesRec(where);
