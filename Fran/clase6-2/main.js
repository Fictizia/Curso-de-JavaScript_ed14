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


var divButton = document.getElementById("disparador");

divButton.addEventListener("click", cambiarFondo)

function cambiarFondo() {
    // color = 'rgb(0-255,0-255,0-255'
    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor = color;
    console.info("Nuevo color:", color);
    divButton.removeEventListener("click", cambiarFondo)
}

var ahora = new Date();
console.log("Con UTC: ");
console.log("==== FECHA ====");
console.log("El año: " + ahora.getUTCFullYear()); // 4 digitos
console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
console.log("==== HORA ====");
console.log("Horas: " + ahora.getUTCHours());
console.log("Minutos: " + ahora.getUTCMinutes());
console.log("Segundos: " + ahora.getUTCSeconds());
console.log("milisegundos: " + ahora.getUTCMilliseconds());