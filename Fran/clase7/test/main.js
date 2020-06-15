
const lista = document.getElementById("lista")
const input = document.getElementById("title")



fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then(res => res.json())
        .then(data => data.results
            .map(poke => fetch(poke.url)
                .then(res => res.json())
                    .then(poke => {
                        var img = document.createElement("img");
                        var p = document.createElement("p");
                        p.innerText = poke.name;
                        img.setAttribute("src", poke.sprites.front_default);
                        var li = document.createElement("li");
                        li.appendChild(p)
                        li.appendChild(img);
                        lista.appendChild(li);
                    }))
    )