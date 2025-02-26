# Clase 2


### JSHint
- [JSHint Online](http://jshint.com/)
- [JSHint About](http://jshint.com/about/)
- [JSHint Repository](https://github.com/jshint/jshint)

### DevTools

- [@ChromeDevTools en Twitter](https://twitter.com/chromedevtools?lang=es)
- [Chrome DevTools](https://developer.chrome.com/devtools)

**Métodos:**
- .assert() *Aparece un mensaje de error en la consola si la afirmación es falsa.*:
```javascript
 var controlador = false;
 console.assert(controlador, "\"controlador\" es igual a \"false\"");
```

- .clear() *Limpia la consola*:
```javascript
 console.clear()
```


- .dir() *Retorna una lista interactiva de las propiedades de un objeto*:
```javascript
 console.dir(document.body);
```

- .dirxml() *Retorna una representación HTML del objeto*:
```javascript
 console.dirxml(document.body);
```


- Agrupadores:
 - .group() *Crea un grupo de mensajes de consola*:
 ```javascript
     console.group("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```
 - .groupCollapsed() *Crea un grupo de mensajes de consola minimizados (por defecto)*:
 ```javascript
     console.groupCollapsed("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```
 - .groupEnd() *Cierra el grupo de mensajes*:
 ```javascript
     console.group("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```


- Tablas:
 - .table() *Muestra los datos dentro de una tabla*:
 ```javascript
 var lenguajes = [
     { nombre: "JavaScript", extension: ".js" },
     { nombre: "TypeScript", extension: ".ts" },
     { nombre: "CoffeeScript", extension: ".coffee" }
 ];
 
 console.table(lenguajes);
 
 console.table(lenguajes, "extension");
 ```

- Gestión del tiempo:
 - .time() *Inicia un contador en ms*:
 - .timeEnd() *Para el contador y devuelve el resutlado*:
 ```javascript
  console.time("Medición de miArray");
  var miArray = new Array(1000000);
  for (var i = miArray.length - 1; i >= 0; i--) {    
   miArray[i] = new Object();
  };
  console.timeEnd("Medición de miArray");
 ```

- Notificadores:
 - .log() *Saca un mensaje por consola*:
 ```javascript
  console.log("Hola en formato clásico");
 ```
 - .info() *Similar a console.log*:
 ```javascript
  console.info("Hola en formato informativo");
 ```
 - .warn() *Similar a Console.log*:
 ```javascript
  console.warn("Hola en formato alerta");
 ```
 - .error() *Similar a console.log, incluye *:
 ```javascript
  console.error("Hola en formato error");
 ```

- Formateadores:

Formato | Descripción
------------ | -------------
%s | Cadena
%d o %i | Número entero
%f | Decimal
%o | DOM
%O | Objeto js
%c | CSS

- Ejemplos:
 - *%o* para estrcuturas del DOM 
 ```javascript
  var parrafos = document.getElementsByTagName("p");
  console.log("DOM: %o", parrafos);
 ```
 - *%O* para objectos JS
 ```javascript    
  var objeto = {"nombre":"Yo","Apellido":"Mismo"};
  console.log("Objeto: %O", objeto);
 ```
 - usando CSS:
 ```javascript
  console.log('Esto es aburrido...');
  console.log('%c Pero se puede mejorar fácilmente! ', 'background: #3EBDFF; color: #FFF; font-size:25px;');
 ```

### Caracteres especiales:

- `\t` *Tabulador*
- `\'` *Comillas Simples*
- `\"` *Comillas Dobles*
- `\\` *\*
- `\n` *Salto de línea*

```javascript
    function caracteresDemo () {
    console.log("Hasta aquí... todo correcto. Ahora vamos a \"tabular\":\tves? Ya estamos más lejos.\n\'Otra linea ;-)\'")
    };
    
    caracteresDemo()
```

### Ejercicios

**Recuerda:** Utiliza [JSHint](http://jshint.com/) para detectar errores..

**1 -** Utiliza .assert para controlar cuando se muestra tu nombre por consola.
```javascript
	var controlador = false;
	console.assert(controlador,  "Hola, yo soy Francicso Valdesoiro");
```

**2 -** Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
- Especificaciones:
	- Imprimir tu nombre usando **console.log, console.info, console.warn**
```javascript
	var nombre = "Hola, yo soy Francisco Valdesoiro";
	console.time("presentación");
	console.log(nombre);
	console.info(nombre);
	console.warn(nombre);
	console.timeEnd("presentación");
```

**3 -** Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.
```javascript
	var nombre = "Hola, yo soy Francisco Valdesoiro";
	console.time("presentación");
	console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
	console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
	console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
	console.timeEnd("presentación");
```

**4 -** Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
```javascript
	var nombre = "Hola, yo soy Francisco Valdesoiro";
	console.time("presentación");
	
	// console.log
	console.group("grupo console.log");
	console.time("tiempo grupo console.log");
	console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
	console.timeEnd("tiempo grupo console.log");
	console.groupEnd();
	
	
	// console.info
	console.group("grupo console.info");
	console.time("tiempo grupo console.info");
	console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
	console.timeEnd("tiempo grupo console.info");
	console.groupEnd();
	
	
	// console.warn
	console.group("grupo console.warn");
	console.time("tiempo grupo console.warn");
	console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
	console.timeEnd("tiempo grupo console.warn");
	console.groupEnd();
	
	
	console.timeEnd("presentación");
```

**5 -** Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.
```javascript
    var alumnos = [
	     { nombre: "Manuel", puesto: 1 },
	     { nombre: "Carlos", puesto: 2 },
	     { nombre: "Alec", puesto: 3 },
	     { nombre: "Julio", puesto: 4 }
	 ];
	 
	 console.table(alumnos);
```



### Comentarios
- Una línea
```javascript
// Comentario en una línea
```
- Multiples Líneas
```javascript
/*
Una Línea....
Otra linea...
Etc...
*/
```
- [JSDoc](https://en.wikipedia.org/wiki/JSDoc)

### Variables

- No se pueden usar espacios
```javascript
var con espacios = 1;
```

- No usar un número delante
```javascript
var 1numero = 1;
```

- Válidos, pero no recomendado
```javascript
var con_guiones_bajos = 1;
var dame$ = 1;
```

- Válidos, es mejor usar [camelCase](https://es.wikipedia.org/wiki/CamelCase)
```javascript
var otraOpcion = 1;
var opcionCon123123 = 1;
```


### Tipos de variables

Operador *typeof* y su [especificación](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)

- [x] Undefined
```javascript
typeof undefined
typeof noDefinido
typeof tampocoCreado
```

- [x] Object
```javascript
typeof null
typeof [15, 4]
typeof new Date()
typeof {a:1}
```

- [x] Boolean
```javascript
typeof false
typeof true
typeof Boolean(false)
```

- [x] Number
```javascript
typeof 3
typeof 3.14
typeof NaN
typeof Infinity
```

- [x] String
```javascript
typeof "hola"
```

- [x] Function
```javascript
typeof function(){}
```


### Matemáticas Básicas
```javascript
var suma = 5 + 4;
var resta = 10 - 6;
var multiplicacion = 3 * 3;
var division = 6 / 2;
var modulo = 43 % 10;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (Agrupando operaciones)
```javascript
var expresion1 = (3 + 7) * 10;
var expresion2 = (-56 * 6) - 74 * -25;
var expresion3 = (3 * 3) + 10 - 12 / 2;
var expresion4 = 44 + (83 % (33 + 100));
var expresion5 = -145 + (500 / 10 - 5) + 10 * 10 ;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (crecimiento y decrecimiento)
```javascript
var numero = 5;

console.log(--numero); // 4
console.log(numero--); // 5 (luego 4)
console.log(++numero); // 6
console.log(numero++); // 5 (luego 6)
```

### Operadores de asignación
- = *Asignacion*
```javascript
var x = 1;
var y = 2;
x = y;
console.info("\"x\" vale ", x);
```

- += *Suma*
```javascript
var x = 1;
var y = 2;
x += y;
console.info("\"x\" vale ", x); // x = x + y
```

- -= *Resta*
```javascript
var x = 1;
var y = 2;
x -= y;
console.info("\"x\" vale ", x); // x = x - y
```

- *= *Multiplicación*
```javascript
var x = 1;
var y = 2;
x *= y;
console.info("\"x\" vale ", x); // x = x * y
```

- /= *División*
```javascript
var x = 1;
var y = 2;
x /= y;
console.info("\"x\" vale ", x); // x = x / y
```

- %= *Resto*
```javascript
var x = 1;
var y = 2;
x %= y;
console.info("\"x\" vale ", x); // x = x % y
```

**Operadores de igualdad**

- Igualdad(==)

```javascript
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1 == object2 // false
0    == undefined  // false
null == undefined  // true
```

- Desigualdad(!=)

```javascript
1 !=   2     // true
1 !=  '1'    // false
1 !=  "1"    // false
1 !=  true   // false
0 !=  false  // false
```

- Identidad / igualdad estricta (===)

```javascript
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 // false
```

**Ejemplos de operadores de igualdad**

```javascript
1 == ‘1’ // verdadero
1 === ‘1’ // falso
false == 0 // verdadero
false === 0 // falso
‘’ == 0 // verdadero
‘’ === 0 // falso
```


**Jugando con variables**

```javascript
var empezoComo3 = 3;
era3();

empezoComo3 = 35;
era3();

empezoComo3 = empezoComo3 + 30;
era3();

empezoComo3 += 4;
era3();

empezoComo3++;
era3();

empezoComo3 -= 12;
era3();

empezoComo3--;
era3();

empezoComo3 *= 10;
era3();

empezoComo3 /= 11;
era3();

empezoComo3 += "texto";
era3();

empezoComo3 += 20;
era3();

empezoComo3++;
era3();


function era3 () {
    console.log("empezoComo3 debería ser 3, ahora su valor es " + empezoComo3);
};
```


### Interacción Básica con el Usuario

- alert():
    ```javascript
    alert("¡Bienvenido a esta web!");
    ```

- confirm():
    ```javascript
    confirm("¿Esta seguro que desea abandonar esta web?");
    ```


- Ejemplo:
    ```javascript
    var respuesta = confirm("presiona un botón!");
    if (respuesta === true) {
        console.log("Has aceptado!");
    } else {
        console.log("Has cancelado");
    }
    ```

- prompt():
    ```javascript
    prompt("¿Como te llamas?");
    ```

- Registremos los datos en una variable:
    ```javascript
    var nombre = prompt("¿Como te llamas?");
    ```

### Ejercicios

**1 -** Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:
- Objetivos:
	-  Captura el nombre del usuario usando prompt
	-  Pregunta al usuario si desea *"comprobar lo rápido que funciona su navegador"*.
	-  En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
    - En caso negativo mostraremos un *alert* informativo.

- Versión 1:
```javascript
	var usuario = prompt("¿Quien eres?");

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta === true) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```

- Versión 2:
```javascript
	var usuario = prompt("¿Quien eres?");

	while(!usuario){
		usuario = prompt("¿Quien eres?")
	}

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```



### Modo Estricto
> El modo estricto hace varios cambios en la semántica normal de JavaScript. Primero, modo estricto elimina algunos errores silenciosos de JavaScript cambiando a que lance los errores. Segundo, modo estricto corrige errores que hacen que sea difícil para los motores de JavaScript para realizar optimizaciones: código de modo estricto a veces se puede hacer para correr más rápido que el código idéntico que no es estricto. Tercero, el modo estricto prohíbe sintaxis que es probable que sea definida en futuras versiones de ECMAScript.
> - [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto)

- [Compatibilidad](http://caniuse.com/#feat=use-strict)

En resumen:
- Detectaremos más errores
- Mejora la interpretación, lo que aumenta la velocidad de ejecucción.
- Previene que usemos sintaxis de futuras versiones de ECMAScript.

Aplicándolo a todo nuestro código

```javascript
// ./script.js
(function() {
  "use strict";

  // Nuestro código

})();
```

Aplicándolo solo en parte del código
```javascript
// ./script.js
function estricta(){
  'use strict';
  function anidada() {
      return "Yo también!";
  }
  return "Hola! Soy una función en modo estricto!  " + anidada();
}

function noEstricta() {
    return "yo no soy una función estricta.";
}
```

Algunos ejemplos:

- Error: Usar variables u objetos sin declararlos antes.

```javascript
    function estricto(){
        'use strict';
        pi = 3.14;
        console.log(pi);
    }
```

- Error: Borrar variables, objetos o funciones. 

```javascript
    function estricto(){
        'use strict';
        pi = 3.14;
        delete pi
    }
```

- Error: Duplicar parámetros

```javascript
    function estricto(){
        'use strict';
        function x (p1, p1){
            // código
        }
    }
```

- Error: Al usar carácteres escapados
 
```javascript
    function estricto(){
        'use strict';
        var x = \010; 
    }
```

Error: Al usar *writable:false*

```javascript
    function estricto(){
        'use strict';
        var obj = {};
        Object.defineProperty(obj, "x", {value:0, writable:false});
        obj.x = 3.14;
    }
```

Error: Al usar *with* 

```javascript
    function estricto(){
        'use strict';
        with(document.getElementById('elemento').style) {
            backgroundColor = 'black';
            color = 'red';
            font_Size = '32px'; // Crea una variable global
        }
    }
```

Error: Al usar *eval()* por seguridad

```javascript
    function estricto(){
        'use strict';
        eval ("var x = 2");
        console.log(x);
    }
```



Otras palabras reservadas en modo estricto:
- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield


### Ejercicios

**1 -** Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto

```javascript
	function calculosVarios(valor1, valor2){
		console.info("El valor de la suma es:", valor1+valor2);
		console.info("El valor de la resta es:",valor1-valor2);
		console.info("El valor de la división es:", valor1/valor2);
		console.info("El valor de la división es:", valor1*valor2)
	};
	
	calculosVarios(5,5);
```

**2 -** Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total

```javascript
	function porcentajeAlumnos(totalHombres, totalMujeres){
		var totalAlumnos = totalHombres + totalMujeres;
		var porcentajeMujeres = (totalMujeres*100)/totalAlumnos;
		var porcentajeHombres = (totalHombres*100)/totalAlumnos;
		
		console.info("El total de alumnos es:", totalAlumnos)
		
		console.log("El total de mujeres es:", totalMujeres);
		console.info("El % de mujeres es:", porcentajeMujeres);
		
		console.log("El total de hombres es:", totalHombres);
		console.info("El % de hombres es:", porcentajeHombres);
	};
	
	porcentajeAlumnos(6,2);
```


### Comparadores básicos

```javascript
var mayorQue = 100 > 10;
var menorQue = 10 < 100;
var mayorIgual = 100 >= 10;
var menorIgual = 10 <= 100;
var igual = 10 == 10;
var igualTotalmente = 10 === 10;
var noIgual = 100 != 10;

function comparar (dato) {
    console.log(dato);
};
```


### Comparadores complejos
- **AND(&&)**
```javascript
    var comparacion;
    comparacion = true && true; // true
    comparacion = true && false // false
    comparacion = false && false // false
    comparacion = false && true // false
```

- **OR(||)**
```javascript
    var comparacion;
    comparacion = true || true; // true
    comparacion = true || false // true
    comparacion = false || false // false
    comparacion = false || true // true
```

- Ejemplos:
```javascript
var ex1 = true && true; // true
var ex2 = (2 == 2) && (3 >= 6); // false
var ex3 = (2>3) || (17 <= 40); // true
var ex4 = false || false; // false

function condicionalAvanzado ( paraComparar ) {
    if (paraComparar) {
        console.log("Verdadero!");
    } else {
        console.log("falso!");
    };
};
```

### Otros datos

- Valor *real* es *true*:
```javascript
console.log("valor boleano de \"Fictizia\":", Boolean("Fictizia")  );
console.log("valor boleano de 1235:", Boolean(1235));
console.log("valor boleano de -1235:", Boolean(-1235));
console.log("valor boleano de un objeto:", Boolean({saludo: "hola"}));
console.log("valor boleano de un array:", Boolean(["platano", -1, false]));
console.log("valor boleano de un array:", Boolean(function(){}));
```

- Sin valor *real* es *false*:
```javascript
console.log("valor boleano de \"\":", Boolean("")  );
console.log("valor boleano de 0:", Boolean(0));
console.log("valor boleano de -0:", Boolean(-0));
console.log("valor boleano de null:", Boolean(null));
console.log("valor boleano de undefined:", Boolean(undefined));
console.log("valor boleano de NaN:", Boolean(NaN));
```