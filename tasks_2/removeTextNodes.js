/*
Функция должна перебрать все дочерние узлы элемента where
и удалить из него все текстовые узлы
Без рекурсии!
Будьте внимательны при удалении узлов,
можно получить неожиданное поведение при переборе узлов
@param {Element} where - где искать
 */

function removeTextNodes(where) {
    const nodesToRemove = [];

    let current = where.firstChild;

    while (current != null) {
        if (current.nodeType === Node.TEXT_NODE) {
            nodesToRemove.push(current);
        }
        current = current.nextSibling;
    }

    nodesToRemove.forEach(node => node.parentNode.removeChild(node));
}

const where = document.getElementById("some-element");
removeTextNodes(where);
