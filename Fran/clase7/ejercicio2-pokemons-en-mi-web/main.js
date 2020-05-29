console.log("Loaded")

var lista = document.getElementById("lista");
var lista2 = document.getElementById("lista2");
var contadorPokemons = 0;



fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
        .then(data => {
                data.results.map(item => {
                    // crear elementos li que contengan el nombre del pokemon
                    var li = document.createElement("li");
                    li.innerText = item.name;
                    li.setAttribute("class", "pokemon");
                    lista.appendChild(li);
                    contadorPokemons++
                })
            })

lista.addEventListener("click", e => {
    lista2.appendChild(e.target)
    e.target.style.color = "red"
})

lista2.addEventListener("click", e => {
    lista.appendChild(e.target)
    e.target.style.color = "cadetblue"
})




// Crear un index.html
// Crear un main.js

// 1 coger los elemento de las listas document.getElementById("")
var lista = document.getElementById("lista")


fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
        .then(data => {
            // recorrer el array dentro del data.results y dentro en cada iteración
            // hacer lo siguiente:
            // 1: crear un elemento li con document.createElement("li")
            // 2: añadir el nombre del pokemon como innerText del li creado anteriormente
            // 3: introducir li dentro de la lista con .appendChild(NombreVariableLI)

        })


