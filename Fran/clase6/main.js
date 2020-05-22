// paso 1: crear un elemento li
// paso 2: añadir texto de la fruta de la iteración
// paso 3: meter el li construido dentro del ul
// paso 4: añadir un atributo class al li

var listaFrutas = ["manzana", "platano", "kiwi", "fresa", "mango"];

var ul = document.getElementById("lista");

listaFrutas.forEach(fruta => {
    var li = document.createElement("li")
    li.innerText = fruta
    li.setAttribute("class", "rojo")
    ul.appendChild(li)
})