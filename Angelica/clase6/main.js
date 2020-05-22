console.log("cargado");

var listaCompra = ["manzana", "platano", "kiwi"];

// var resultado = listaCompra.map(i => i + " que rico");


var ul = document.getElementById('lista');
listaCompra.forEach(fruta => {
    var li = document.createElement('li');
    li.innerText = fruta
    li.setAttribute("class", "rojo")
    ul.appendChild(li)
});