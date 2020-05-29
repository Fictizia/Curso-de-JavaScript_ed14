console.log("el archivo js se ha cargado")
var miNav = document.getElementById("miNav");

miNav.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        miNav.style.backgroundColor = e.target.id;
    }
})

var miNavLinks = miNav.getElementsByTagName("a");