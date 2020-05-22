console.log("loaded");

// Array Lista Compra
var listaCompra = ["manzana", "platano", "kiwi"];

// HTML UL Element
var ul = document.getElementById("lista");

// Map Array listaCompra
var resultadoCompra = listaCompra.map( (x, counter) => ("Fruit: " + x + ": " + counter++ ) );

// Display data
console.log(resultadoCompra);

// HTML LI Element
var li = document.createElement("li");

// Modify LI Text
li.innerText = "Apple";

// Add LI to UL
ul.appendChild(li);

// Paso 1: Crear LI Element
var listaFrutas = ["manzana", "platano", "kiwi"];

// Paso 2: Añadir Texto a cada Iteración
var ul = document.getElementById("lista");

// Paso 3: Añadir LI Construido dentro de UL
listaFrutas.forEach(fruta => {
    var li = document.createElement("li"); // 1
    li.innerText = fruta;                  // 2
    // Paso 4: Añadir Atributo al elemento LI
    li.setAttribute("class", "redClass");  // CSS Class Style
    li.setAttribute("name", "redName");    // CSS Class Style
    ul.appendChild(li);                    // 3
} )

