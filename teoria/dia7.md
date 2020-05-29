## Clase 7

### Paradigmas de Programación


> Un paradigma de programación es una propuesta tecnológica adoptada por una comunidad de programadores y desarrolladores cuyo núcleo central es incuestionable en cuanto que únicamente trata de resolver uno o varios problemas claramente delimitados; la resolución de estos problemas debe suponer consecuentemente un avance significativo en al menos un parámetro que afecte a la ingeniería de software.
> Un paradigma de programación representa un enfoque particular o filosofía para diseñar soluciones. Los paradigmas difieren unos de otros, en los conceptos y la forma de abstraer los elementos involucrados en un problema, así como en los pasos que integran su solución del problema, en otras palabras, el cómputo.
> Tiene una estrecha relación con la formalización de determinados lenguajes en su momento de definición. Es un estilo de programación empleado.
> Un paradigma de programación está delimitado en el tiempo en cuanto a aceptación y uso, porque nuevos paradigmas aportan nuevas o mejores soluciones que la sustituyen parcial o totalmente.
> [Wikipedia](https://es.wikipedia.org/wiki/Paradigma_de_programaci%C3%B3n)

**Paradigmas principales**
- [Programación imperativa o por procedimientos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_imperativa) 
	- Extendida en C, BASIC o Pascal.
	- La programación imperativa es la más usada y la más antigua
	- Se basa en dar instrucciones al ordenador de como hacer las cosas en forma de algoritmos.
- [Programación orientada a objetos (POO/OOP)](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos)
	- Extendida en C++, C#, Java, Python... 
	- Está basada en el imperativo, pero encapsula elementos denominados objetos que incluyen tanto variables como funciones
- [Programación dirigida por eventos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_dirigida_por_eventos)
	- Tanto la estructura como la ejecución de los programas van determinados por los sucesos que ocurran en el sistema, definidos por el usuario o que ellos mismos provoquen.
- [Programación funcional](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional)
	- Basada en la definición los predicados
	- Es de corte más matemático
	- Extendida en Python, Haskell, etc...
- [Programación reactiva](https://es.wikipedia.org/w/index.php?title=Programaci%C3%B3n_reactiva&action=edit&redlink=1)
	- Este paradigma se basa en la declaración de una serie de objetos emisores de eventos asíncronos y otra serie de objetos que se "suscriben" a los primeros (es decir, quedan a la escucha de la emisión de eventos de estos) y *reaccionan* a los valores que reciben. 
	- Es muy común usar la librería Rx de Microsoft (Reactive Extensions)
- [Programación multiparadigma](https://es.wikipedia.org/wiki/Programaci%C3%B3n_multiparadigma)
	- Es el uso de dos o más paradigmas dentro de un programa.

**Otros paradigmas**
- [Programación declarativa](https://es.wikipedia.org/wiki/Programaci%C3%B3n_declarativa)
- [Lenguaje específico del dominio (DSL)](https://es.wikipedia.org/wiki/Lenguaje_espec%C3%ADfico_del_dominio): SQL
- [Programación con restricciones](https://es.wikipedia.org/wiki/Programaci%C3%B3n_con_restricciones)
- [Programación lógica](https://es.wikipedia.org/wiki/Programaci%C3%B3n_l%C3%B3gica)
- [Programación dinámica](https://es.wikipedia.org/wiki/Programaci%C3%B3n_din%C3%A1mica)
- Etc...

### POO: La teoría

>La programación basada en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.
>[Mozilla developer network](https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)


**Terminología**
- Clase
	- Define las características del Objeto.
- Objeto
	- Una instancia de una Clase.
- Propiedad
	- Una característica del Objeto, como el color.
- Método
	- Una capacidad del Objeto, como caminar.
- Constructor
	- Es un método llamado en el momento de la creación de instancias.
- Herencia
	- Una Clase puede heredar características de otra Clase.
- Encapsulamiento
	- Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
- Abstracción
	- La conjunción de herencia compleja, métodos, propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
- Polimorfismo
	- Diferentes Clases podrían definir el mismo método o propiedad.

**Recursos**
- [A Simple Explanation of OOP](https://medium.com/@richardeng/a-simple-explanation-of-oop-46a156581214)
- [Chapter 3: What is Object-Oriented Programming?](https://medium.com/learn-how-to-program/chapter-3-what-is-object-oriented-programming-d0a6ec0a7615)
- [JavaScript OOP: A beginners guide](https://carlosbecker.com/posts/oop-coffee-java-script/)
- [Introducción a la POO en Javascript moderno: las nuevas clases en ES6](http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/)
- [MDN | Introducción a JavaScript orientado a objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)
- [MDN | Object-oriented JavaScript for beginners](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Goodbye, Object Oriented Programming](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53)
- [Why Object Oriented Programming is Awesome](https://medium.com/@konradmusial/why-object-oriented-programming-is-awesome-92e8578f450a)
- [The Little Guide for OOP in JS](https://hackernoon.com/the-little-guide-for-poo-in-js-3cfff83ad095)
- [Usando Clases en JavaScript](https://medium.com/@jmz12/usando-clases-en-javascript-e07f0e25c67d)

### POO: Lo básico del constructor
**Entendiendo los objetos**
```javascript
/*
[Objeto]{
    [ Propiedad = Variables (no funciónes) ]
    [ Método = Solo funciónes ]
}
*/
```


**Constructor de Objetos**
```javascript
var coche = function (parametros) {
    /* Codigo*/
};
```


**Propiedades del Objeto**
```javascript
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad
    this.color = color;
    this.tipo = tipo;
};
```

### POO: Métodos

**Asignación en el Constructor**
```javascript
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    this.detalles = function(){
      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
    }
};

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();
```


**Extensión del prototipo**
```javascript
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
};

coche.prototype.detalles = function(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();
```


**Vinculación Externa**
```javascript
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    this.detalles = dameDetalles;
};

function dameDetalles(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();
```

### POO: Herencia


**Herencia (simplificada)**
```javascript
var perro  = function () {
    this.patas = 4;
    this.ojos = 2;
};

var pastorAleman = function () {
    this.colorLengua = "negra";
    this.colorOjos = "marrón";
    this.capacidadTrabajo = true;
    this.especialidad = "Pastoreo";
};

pastorAleman.prototype = new perro();

var miPerro = new pastorAleman();
console.log("Número patas: "+miPerro.patas+"\n Número ojos: "+miPerro.ojos+"\n Color Lengua: "+miPerro.colorLengua+"\n Color ojos: "+miPerro.colorOjos+"\n Capacidad de trabajo: "+miPerro.capacidadTrabajo+"\n Especialidad: "+miPerro.especialidad);
```

**Herencia clásica**
```javascript
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    this.detalles = dameDetalles;
};

var furgon = function (taraMinima, cargaUtil, volumenCarga) {
    this.taraMinima = taraMinima;
    this.cargaUtil = cargaUtil;
    this.volumenCarga = volumenCarga;
    this.detallesTecnicos = detallesTecnicos;
};


function dameDetalles(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

function detallesTecnicos(){
  console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
}

var miPickup = new coche ("Land Rover", "Santana Aníbal", 35, "Marrón tierra", "4x4");
miPickup.prototype = new furgon (1200, 768, 4.5);


miPickup.detalles();
miPickup.prototype.detallesTecnicos();
```


### POO: en la realidad

**Métodos y atributos privados y públicos**
```javascript
var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
    // públicas
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    
    // privadas
    var ITVPasada = true;
    var ITVfrecuencia = "Cada año";
    var seguroEnRegla = true;
    var companySeguros = "SegurExpress";
    var tipoSeguro = "a terceros";
	
	// Público
	this.dameDetalles = function () {
		console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
    }
	
	// Privadas
    function datosPrivados() {
        if (ITVPasada && seguroEnRegla)
            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
        else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }

    datosPrivados();
    this.dameDetalles();
};

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var miCoche2 = new cocheEmpresa ("Audi", "S4", 2, "Rojo", "Compacto");
```

**Datos opcionales**
```javascript
var cocheEmpresa = function (marca, modelo, antiguedad, color) {

    this.marca = marca || "Seat";
    this.modelo = modelo || "Ibiza";
    this.antiguedad = antiguedad || 6;
    this.color = color || "Azul Corporativo";

	this.dameDetalles = function () {
		console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años y color "+this.color);
    }
	
    this.dameDetalles();
};

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var miCoche2 = new cocheEmpresa ();
var otroCoche = new cocheEmpresa ("Seat", "Leon");
```


**Reutilizando el contexto común**
```javascript
// Creamos un ID
var contador = 0;
var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
   	this.id = contador++;
    	    
    var ITVPasada = true;
    var ITVfrecuencia = "Cada año";
    var seguroEnRegla = true;
    var companySeguros = "SegurExpress";
    var tipoSeguro = "a terceros";
	
	this.dameDetalles = function () {
		console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
    }
	
    function datosPrivados() {
        if (ITVPasada && seguroEnRegla)
            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
        else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }

    function identificador(){
        console.warn("Recuerda! Tu coche esta identificado como coche numero "+contador);
    }
	
    datosPrivados();
    this.dameDetalles();
    identificador();
};

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var otroCoche = new cocheEmpresa ("Audi", "A8", 5, "gris", "Berlina");
var miCoche2 = new cocheEmpresa ("Seat", "Ibiza", 9, "rojo", "Utilitario");
console.info("Total de coches de empresa hasta el momento "+contador);
```




### POO: Trabajando con prototipos

**[Object.create()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/create)**
```javascript
var coche = {
    marca: "Seat",
    modelo: "Panda",
    antiguedad: 20,
    color: "azul",
    tipo: "turismo"
};

var clonCoche = Object.create(coche);

console.log(clonCoche.marca+" "+clonCoche.modelo);
```


**[Object.prototype.isPrototypeOf()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/isPrototypeOf)**
```javascript
console.log(coche.isPrototypeOf(clonCoche));
```


**[Object.prototype.constructor](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/constructor)**
```javascript
function arbol (nombre) {
   this.nombre = nombre;
}

var miArbol = new arbol( "Pino" );
console.log( "miArbol.constructor es " + miArbol.constructor );
```


**[Object.prototype.toString()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/toString)**
```javascript
function Perro(nombre, criadero, color, sexo) {
   this.nombre=nombre;
   this.criadero=criadero;
   this.color=color;
   this.sexo=sexo;
}

var elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino");

elPerro.toString();

Perro.prototype.toString = function perroToString() {
  var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
  return retorno;
};

elPerro.toString();
```


### POO: con ES6+


**Definición de Clases**

```javascript
class coche{
  constructor(marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
  }
  detalles() {
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  }
}

let miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();

/* ECMA 5
var coche = function (marca, modelo, antiguedad, color, tipo) {
    // Propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    // Metodos
    this.detalles = function(){
      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
    }
};

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();
*/
```

**Extensión de clases**

```javascript
class perro {
  constructor(nombre) {
    this.patas = 4;
    this.ojos = 2;
    this.nombre = nombre;
  }

  ladrar() {
    console.log(`${this.nombre} esta ladrando!`);
  };
}

class pastorAleman extends perro {
  constructor(nombre) {
    super('pastorAleman');
    this.colorLengua = "negra";
    this.colorOjos = "marrón";
    this.capacidadTrabajo = true;
    this.especialidad = "Pastoreo";
  }

  informacion() {
  	console.log(`Nombre: ${this.nombre}
  	Número patas: ${this.patas}
  	Número ojos: ${this.ojos}
  	Color ojos: ${this.colorOjos}
  	Color Lengua: ${this.colorLengua}
  	Capacidad de trabajo: ${this.capacidadTrabajo}
  	Especialidad: ${this.especialidad}`);
  }
}

let miPerro = new pastorAleman('Golden');
miPerro.informacion();
miPerro.ladrar();

/* ECMA 5
var perro  = function (nombre) {
    this.patas = 4;
    this.ojos = 2;
    this.nombre = nombre;
    this.ladrar = function(){
    	console.log(this.nombre + " esta ladrando!");
    }
};

var pastorAleman = function () {
    this.colorLengua = "negra";
    this.colorOjos = "marrón";
    this.capacidadTrabajo = true;
    this.especialidad = "Pastoreo";
    this.informacion = function(){
		console.log("Nombre: "+this.nombre+"\nNúmero patas: "+this.patas+"\nNúmero ojos: "+this.ojos+"\nColor Lengua: "+this.colorLengua+"\nColor ojos: "+this.colorOjos+"\nCapacidad de trabajo: "+this.capacidadTrabajo+"\nEspecialidad: "+this.especialidad);
    }
};

pastorAleman.prototype = new perro("Golden");

var miPerro = new pastorAleman();
miPerro.informacion();
miPerro.ladrar();
*/
```

**Métodos Estáticos**
```javascript
class coche{
  static info (edad){
  	console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conduccir": "y ... ¡Sorpresa! No puedes conduccir."}`);
  }
  constructor(marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
  }
  detalles() {
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  }
}

coche.info(50);
coche.info(8);
let miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();
```


### Funciones


- Propiedad *name*:
    ```javascript
  function miFuncion (){
    // vacia
  };

  console.log(miFuncion.name);
    ```


- **Declaración y ejecución**:
    ```javascript
  function dameTrue (){
    return true
  };

  function dameFalse () {
    return false
  };

  dameTrue();
  dameFalse();
    ```

- **this**:
  - como función (*this* contexto *window*)
    ```javascript
    function ambitoGlobal () {
      return this;
    }
    
    ambitoGlobal()
    ```
  - como método en un objeto (*this* contexto objeto al que pertenece el método)
    ```javascript
    var objeto = {};
    
    objeto.miMetodo = function () {
      return this;
    }
    
    objeto.miMetodo();
    ```   
  - como constructor de un objeto (*this* contexto objeto creado)
  - .apply() y .call() (modificación explícita de *this*)

- **Argumentos:**
  - El exceso de argumentos no es un problema
  - La falta de argumento crea un valor indefinido
    - El Objeto Arguments no es un Array, solo es similar.
    ```javascript    
  
	  function pruebaArguemntos () {
	  console.log(arguments);
	  console.info(arguments[0]);
	  console.info(arguments[1]);
	  }
	  
	  pruebaArguemntos (1, "vale", true);
	  
    ```
- [Objeto Arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments)


- **Retorno**
```javascript
  function sumaCuadrados (a, b) {
    return (a*a) + (b*b);
  };
```

### Scope

- Declaración y ejecución:
    ```javascript
  var numero = 450;
  var otroNumero = 23;

  function sumaCuadrados (a, b) {
    var numero = a;
    var otroNumero = b;
    var calculo = (numero*numero) + (otroNumero*otroNumero);
    console.log("\"numero\" es \""+numero+"\", local");
    console.log("\"otroNumero\" es \""+otroNumero+"\", local");
  };

  function verificarGlobales() {
    console.log("\"numero\" es \""+numero+"\", global");
    console.log("\"otroNumero\" es \""+otroNumero+"\", global");
  };
    ```

### Funciones Avanzadas

- Anónimas (expresiones):
    ```javascript
  var sumaCuadrados = function (a, b) {
    return (a*a) + (b*b);
  };
    
    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
    ```

- Funciones como dato:
    ```javascript
  function saludo () {
    console.log("hola!");
  };

  function lanzar (funcion){
    funcion();
  };
    ```

- Funciones anónimas autoejecutables:
    ```javascript
  (function() {
    console.log("hola Amigo/a")

  }) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
  ( function(quien){
     console.log("hola " + quien);
  })("Amigo/a");
    ```


- Función que devuelve una función anónima:
  - Asignando una variable:
    ```javascript
    function saludo(quien){
        return function(){
            alert("hola " + quien);
        }
    }

    var saluda = saludo("Amigo/a");
    saluda();
    ```

  - Sin asignar una variable:
    ```javascript
    function saludo(quien){
        return function(){
            alert("hola " + quien);
        }
    }

    saludo("Amigo/a")();
    ```


### Funciones Avanzadas: Anidación

**Con variables**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
var saluda = saludar("Amigo/a");
saluda();
```

**Ejecución directa**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
saludar("Amigo/a")();
```
    
### Funciones Avanzadas: Recursión

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).
  
    ```javascript
    function factorial(n){
      return n <= 1 ? 1 : n * factorial(n-1);
    }
    
    factorial(0); // n! = 1
    factorial(1); // n! = 1
    factorial(2); // n! = 2
    factorial(3); // n! = 6 (3*2*1)
    factorial(4); // n! = 24 (4*3*2*1)
    factorial(5); // n! = 120 (5*4*3*2*1)
    factorial(6); // n! = 720 (...)
    // ...
    ```

### Funciones Avanzadas: Closures

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
  function sumador(x) {
    return function(y) {
      return x + y;
    };
  }

  var sum1 = sumador(10); //Closure
  var sum2 = sumador(30); //Closure

  console.log(sum1(2)); // Devuelve 12
  console.log(sum2(2)); // Devuelve 32
  console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
  function saludar(segundos){
    var hola = "Hola, Hola!";

    setTimeout(function(){
      console.info(hola);
    },segundos*1000);
  }

  saludar(2);
    ```

- Otro ejemplo... más útil:
    ```javascript
      var varGlobal = "Soy un dato Global";
      var burbuja;

      function nivel1() {
        var varInterna = "Soy un dato interno. -> nivel1";

        function nivel2() {
          console.log("Estoy dentro de la funcion -> nivel2")
          console.log("Estoy dentro de la funcion -> nivel2 y puedo acceder al nivel1: "+varInterna)
        }

        burbuja = nivel2;

      }

      nivel1();

      burbuja();
      console.log("Burbuja recuerda su contexto original")
    ```

### Funciones Avanzadas: Callbacks

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
  var quieroCallback = function(parametro, callback){
      if ((callback) && (typeof callback === 'function')){
          callback(parametro);
      }
      else
          console.log(parametro, callback);
  }
   
  quieroCallback('a', 'b');
   
  quieroCallback('a', function(val){
      console.log(val);
  });
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
      // código del callback
  });
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      callback();
  }

  comerSandwich('jamón', 'queso', function() {
      console.info('Ya terminé...');
  });
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback) {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback && typeof(callback) === "function") {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


### Funciones Avanzadas: Asincronia
```javascript
	    function comerSandwich(elemento1, elemento2, callback) {
	      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    setTimeout(alarma, 5000);
	    function alarma(){
	      console.log("ring! ring!.. pasaron los 5 segundos!");
	    };
	
	    
	      if (callback && typeof(callback) === "function") {
	          callback();
	      }
	  }
	
	  comerSandwich('jamón', 'queso', function() { 
	      console.log('Ya terminé...');
	  });
```


- Más información: 
  - [Callback Functions in JavaScript de Louis Lazaris](http://www.impressivewebs.com/callback-functions-javascript/)
  - [Creando y utilizando callbacks de Pablo Novas en fernetjs](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)

### Funciones Avanzadas: Funciones anónimas autoejecutadas

- **Sintaxis:**
```javascript
    (function(){
      console.log('Hola Mundo!');
    })();
```

- **Incluyendo referencias y manipulando otros elementos:**
```javascript
    var myApp = myApp || {};
    
    (function(w, doc, ns){
      
      ns.accesoWindow = function(){
        return w === window;
      };
      ns.accesoDocument = function(){
        return doc === document;
      };
      ns.confirmacion = function(){
        console.log('Hola Mundo! Mis caracteristicas son: \n Acceso a Window: '+this.accesoWindow()+'\n Acceso a Document: '+this.accesoDocument());
      }
    })(window, document, myApp);

    
    // myApp.confirmacion()
```

### Ejercicios

#### Trenes

**1 -** Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

    function listaPasajeros(){
    	pasajeros.forEach(function(pasajero, posicion){
            console.log("El pasajero "+pasajero+" tiene reservado el asiento "+(posicion+1));
    	})
    };
```

- Respuesta esperada (consola):
```
	El pasajero Alicia Gutierrez tiene reservado el asiento 1
	El pasajero Alfonso Gomez tiene reservado el asiento 2
	El pasajero Luis Navarro tiene reservado el asiento 3
	El pasajero Oscar Garcia tiene reservado el asiento 4
	El pasajero Andres Fernandez tiene reservado el asiento 5
	El pasajero Lucia Mellado tiene reservado el asiento 6
```


**2 -** Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		lista.push(nombre);
	};

	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
		} else {
			var posicion = lista.indexOf(nombre);
			
			if(posicion !== -1){
				console.log("El pasajero \""+lista[posicion]+"\" será eliminado!")
				lista.splice(posicion, 1);
			} else {
				console.log("El pasajero \""+nombre+"\" no encontrado!")
			}
		};
	};
```


**3 -** La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		var vacante = lista.indexOf(undefined);
		vacante === -1 ? lista.push(nombre) : lista[vacante] = nombre;
	};

	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
		} else {
			var posicion = lista.indexOf(nombre);
			
			if(posicion !== -1){
				console.log("El pasajero \""+lista[posicion]+"\" será eliminado!")
				lista[posicion] = undefined;
			} else {
				console.log("El pasajero \""+nombre+"\" no encontrado!")
			}
		};
	};
```


**4 -** Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar Closures*

Info: 	
	- Tetuán (12)
   	- Moncloa (19)
   	- Hortaleza (21)

```javascript
	var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

	function constructorDeTickets (estacion, tiempo) {
		return function (nombre) {
			console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n El tiempo estimado de llegada es de "+tiempo+" minutos.\n Estamos trabajando en la mejora de nuestra vía principal, disculpe las molestias!");
		};
	}

	var tetuanExpress = constructorDeTickets ("Tetuán", 12);
	var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
	var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);

	tetuanExpress ("Pepe");
	moncloaExpress ("Luis");
	hortalezaExpress ("Hector");
```