/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 1; i <= count; i++) {
        const p = document.createElement(tag);
        p.innerHTML = content;
        document.body.insertAdjacentElement('afterbegin', p);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const divRoot = document.createElement('div');
    divRoot.classList.add('item_1');

    function generateSubTree(subLevel, parent) {
        for (let i = 1; i <= childrenCount; i++) {
            let nextDiv = document.createElement('div');
            nextDiv.classList.add('item_' + subLevel);
            parent.appendChild(nextDiv);
            if (subLevel < level) {
                generateSubTree(subLevel + 1, nextDiv);
            }
        }
    }

    generateSubTree(2, divRoot);
    return divRoot;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    const items_2 = tree.querySelectorAll('.item_2');
    for (let item of items_2) {
        let sec = document.createElement('section');
        sec.setAttribute('class', 'item_2');
        sec.innerHTML = item.innerHTML;
        item.parentNode.replaceChild(sec, item);
    }
    return tree;
}
