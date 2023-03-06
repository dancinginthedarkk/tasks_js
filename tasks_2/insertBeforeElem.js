/*
Функция должна вставлять элемент what в начало элемента where
@param {Element} what - что вставлять
@param {Element} where - куда вставлять
 */

function insertBeforeElem(what, where) {
    if (!what || !where) {
        throw new Error("what or where is not defined");
    }

    if (!(what instanceof Element) || !(where instanceof Element)) {
        throw new Error("what or where are nor Dom elements");
    }

    where.insertBefore(what, where.firstChild);
}

const container = document.getElementById("some-element");
const newParagraph = document.createElement("p");
newParagraph.textContent = "new p element";

insertBeforeElem(newParagraph, container);
