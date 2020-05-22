
var listaFrutas = ["manzana", "plátano", "kiwi", "fresas"];

var ul = document.getElementById("lista");

listaFrutas.forEach(fruta => {
    var li = document.createElement("li");
    li.innerText = fruta;
    ul.appendChild(li);
})