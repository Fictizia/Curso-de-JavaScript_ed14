// console.log("cargado!")



// listaCompra.map(x => console.log(x));
// listaCompra.forEach(x => console.log(x));
// listaCompra.map(x => x + "que rico!");
// var resultadoArray = listaCompra.map(x => x + "que rico!");



var listaFrutas = ["manzana ","platano ","kiwi ","piña","fresa"];

document.getElementById("lista");

var Ul = document.getElementById("lista");

listaFrutas.forEach(fruta => {
    //paso 1: crear un elemento li
    var li = document.createElement ("li")
    //paso 2: añadir texto de la fruta de la iteración
    li.innerText = fruta
    // CSS  AÑadir un estilo/atributo al li
    li.setAttribute("class","rojo")
    //paso 3: meter el li contruido dentro del ul
    Ul.appendChild (li)

})


// document.createElement("li");
// var guardandoli = document.createElement("li");
// guardandoli.innerText = "manzana"
// guardandoUl.appendChild (guardandoli);




// console.log (resultadoArray);


