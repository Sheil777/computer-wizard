/* Клик мышкой по карте */

// Для работы скрипта необходимо добавить id="wrapMap" для блока-обёртки
// и прописать стиль прям в iframe style="pointer-events: none;"

wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
}