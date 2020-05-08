# Clase 4

### Números

**Propiedades**

- [Notación científica](https://es.wikipedia.org/wiki/Notaci%C3%B3n_cient%C3%ADfica)

- .MAX_VALUE() *El número más grande representable (1.7976931348623157e+308)*:
    ```javascript
       var numero1 = 1.7976931348623157e+308;
       var numero2 = 1.7976931348623157e+310;
       
       function verificarValorMaximo(num){
       
       	if (num <= Number.MAX_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMaximo(numero1);
       verificarValorMaximo(numero2);    
    ```

- .MIN_VALUE() *El número más pequeño representable (5e-324)*:
    ```javascript
       var numero1 = 5e-323;
       var numero2 = 5e-326;
       
       function verificarValorMinimo(num){
       
       	if (num >= Number.MIN_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMinimo(numero1);
       verificarValorMinimo(numero2);
    ```

- .NEGATIVE_INFINITY() *El valor negativo de la propiedad del objeto global Infinity*:
    ```javascript
        var numeroMinimo = (-Number.MAX_VALUE) * 2
        console.log(numeroMinimo);
        
        if (numeroMinimo === Number.NEGATIVE_INFINITY) {
         numeroMinimo = 0;
        }
        console.log(numeroMinimo);
    ```

- .NaN() *Not A Number*:
    ```javascript
        NaN === NaN;        // false
        Number.NaN === NaN; // false
        isNaN(NaN);         // true
        isNaN(Number.NaN);  // true    
    ```

- .POSITIVE_INFINITY() *Representa el infinito positivo*:
    ```javascript
        var numeroMaximo = Number.MAX_VALUE * 2
        console.log(numeroMaximo);
        
        if (numeroMaximo === Number.POSITIVE_INFINITY) {
         numeroMaximo = 0;
        }
        console.log(numeroMaximo);    
    ```

**Métodos:**

- .toExponential() *Devuelve una cadena con el valor número en formato de potencia*:
    ```javascript
        var numObj = 77.1234;
        
        console.log(numObj.toExponential());  // 7.71234e+1
        console.log(numObj.toExponential(4)); // 7.7123e+1
        console.log(numObj.toExponential(2)); // 7.71e+1
        console.log(77.1234.toExponential()); // 7.71234e+1   
    ```


- .toFixed() *Devulve un numero con decimales*:
    ```javascript
        var numObj = 12345.6789;
        
        numObj.toFixed();       //'12346' redondeo
        numObj.toFixed(1);      //'12345.7'
        numObj.toFixed(6);      //'12345.678900' Se añaden ceros en caso necesario
        (1.23e+20).toFixed(2);  //'123000000000000000000.00'
        (0).toFixed(2);         //'0.00'
        2.34.toFixed(1);        //'2.3' redondeo
        -2.34.toFixed(1);       //-2.3 Numeros negativos no son devueltos como cadenas.
        (-2.34).toFixed(1);     //'-2.3' En caso de usar paréntesis se salta la limitación 
    ```


- .toLocaleString() *Devulve una cadena con el valor numeral representado en lenguaje local*:
    ```javascript
        var numero = 3500;
        // En Local
        console.log(numero.toLocaleString()); // 3.500
        // En Árabe
        console.log(numero.toLocaleString('ar-EG')); // ٣٬٥٠٠
        // En Chino decimal
        console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 三,五〇〇
    ```


- .toPrecision() *Devuelve un numero precisado*:
    ```javascript
        var numero = 5.123456;
        
        console.log(numero.toPrecision());    // 5.123456
        console.log(numero.toPrecision(5));   // 5.1235
        console.log(numero.toPrecision(2));   // 5.1
        console.log(numero.toPrecision(1));   // 5
        console.log((1234.5).toPrecision(2)); // 1.2e+3 (En ocasiones )
    ```



- .toString() *Devuelve una cadena con el número en la base que determinemos*:
    ```javascript
        console.log((17).toString());     // '17'
        console.log((17.2).toString());   // '17.2'
        console.log((-0xff).toString(2)); // '-11111111'
        console.log((254).toString(16));  // 'fe'
    ```
 
- .parseFloat() *Devuelve un número décimal partiendo de una cadena*:
    ```javascript
        Number.parseFloat("3.14"); // 3.14
        Number.parseFloat("314e-2"); // 3.14
        Number.parseFloat("0.0314E+2"); // 3.14
        Number.parseFloat("3.14textos..."); // 3.14
        Number.parseFloat("1textos..."); //1
    ```
    
- .parseInt() *Devuelve un número entero en una base especifica o en base 10 partiendo de una cadena*:
    ```javascript
        parseInt(" 0xF", 16); // 15
        parseInt(" F", 16);  // 15
        parseInt("17", 8);  // 15
        parseInt(021, 8);  // 15
        parseInt("015", 10);  // 15
        parseInt(15.99, 10);  // 15
        parseInt("15,123", 10);  // 15
        parseInt("FXX123", 16);  // 15
        parseInt("1111", 2);  // 15
        parseInt("15*3", 10);  // 15
        parseInt("15e2", 10);  // 15
        parseInt("15px", 10);  // 15
        parseInt("12", 13);  // 15
    ```


- [Comparativas de rendimeinto interesantes](https://jsperf.com/math-floor-vs-math-round-vs-parseint/74)

### Math

**Métodos:**

- .random() *Devuelve un número aleatorio*
    ```javascript
        // Número aleatorio entre 0 (incluido) y 1 (excluido)
        Math.random(); 
        
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        Math.random() * (max - min) + min;
        Math.random() * (11 - 0) + 0;
        
        // Retorna un entero aleatorio entre min (incluido) y max (excluido)
        Math.floor(Math.random() * (11 - 0)) + 0;
    ```

- .round() *Devuelve el valor de un número redondeado al entero más cercano*
    ```javascript
        Math.round(20.5); // 21
        Math.round(20.49); // 20
        Math.round(-20.51); // -21
    ```

- .Floor() *Devuelve el máximo entero menor o igual a un número.*
    ```javascript
        Math.floor(20.5); // 20
        Math.floor(20.49); // 20
        Math.floor(-20.51); // -21
    ```
- .max() *retorna el mayor de cero o más números*
    ```javascript
        function calcularMayor(valor1, valor2, valor3){
            return Math.max(valor1, valor2, valor3);
        }
        
        // Mejorando calcularMayor
        function calcularMayor(){
        	var args = Array.prototype.slice.call(arguments);
        	return Math.max.apply(null, args);
        }

    ```
- .min() *retorna el menor de cero o más números*
    ```javascript

        function calcularExtremos(){
        	var args = Array.prototype.slice.call(arguments);
        	return {minimo: Math.min.apply(null, args),
        			maximo: Math.max.apply(null, args)
        	};
        }
        
        
        misExtremos = calcularExtremos(1,2,4,56,-123);
        
        console.log("Mínimo: "+misExtremos.minimo+"\n"+"Máximo: "+misExtremos.maximo);
    ```    

**Librerías:**
- [Mathjs](http://mathjs.org/)

### Ejercicios

**1 -** Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

```javascript
    function azarMoneda() {

        var valor = Math.floor((Math.random() * 2) + 1);

        if (valor === 1){
            console.info("Ha salido Cara!!");
        } else {
            console.info("Ha salido Cruz!");
        }

    }
```

**2 -** Diseña un algoritmo que  simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

```javascript
    function azarDados() {

        var coincidencias = 0;

        for (var i = 0; i < 100; i++) {

            var dado1 = Math.floor((Math.random() * 6) + 1);
            var dado2 = Math.floor((Math.random() * 6) + 1);
            var tirada = dado1 + dado2;

            if (tirada === 10) {
                coincidencias++;
            }
        };

        console.info("El azar ... sumó 10 un total de " +coincidencias+ " veces")

    }
```

### Dates

**Librerías:**
- [Dates.js](http://www.datejs.com/)
- [Momments.js](http://momentjs.com/timezone/)
- [JQuery timeAgo](http://timeago.yarp.com/)
- [Livestamp.js](https://mattbradley.github.io/livestampjs/)

**Metodos**

- Creando Fechas:
    - Fecha Actual:
    ```javascript
        var ahora = new Date();
        console.log(ahora);
    ```
    - Usando milisegundos (desde el 1/1/1970 00:00):
    ```javascript
        var diaDespues = new Date(3600*24*1000);
        console.log(diaDespues);
    ```
    - Usando cadenas de texto:
    ```javascript
        var newYear = new Date("January 1, 2016 00:00:00");
    ```
    - Usando números:
    ```javascript
        var newYear = new Date(2016, 1, 1); // AAAA, MM, DD
        var newYear = new Date(2016, 1, 1, 0, 0, 0); // AAAA, MM, DD, HH, MM, SS
    ```
    - Usando UTC:
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
    ```

- Getters:
    - Local
    ```javascript
        var ahora = new Date();
        console.log("La fecha es " + ahora);
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getHours());
        console.log("Minutos: " + ahora.getMinutes());
        console.log("Segundos: " + ahora.getSeconds());
        console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
        console.log("milisegundos: " + ahora.getMilliseconds());
    ```
    - UTC
    ```javascript
        var ahora = new Date();
        console.log("Con UTC: ";
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
    ```

- Setters:
    - Local
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
        console.info("La fecha es " + newYear);
        
        newYear.setFullYear(1980); // Pasamos a 1980
        console.info("La fecha es " + newYear);
        
        newYear.setDate(56); // 1 Enero + 56 Días
        console.info("La fecha es " + newYear);
        
        newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
        console.info("La fecha es " + newYear);
        
        newYear.setUTCHours(36); // le sumamos 36 horas
        console.info("La fecha es " + newYear);
        
        newYear.setMonth(-6); // le quitamos 6 meses
        console.info("La fecha es " + newYear);
    ```

- Otros:
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    -.toString(), .toDateString(), .toTimeString() *Devuelve una cadena con la fecha*
    ```javascript
        ahora.toString(); // Fecha y Hora
        ahora.toDateString(); // Solo Fecha
        ahora.toTimeString(); // Solo Hora
    ```
    -.toUTCString(), .toISOString() *Devuelve una cadena con la fecha en formatos específicos*
    ```javascript
        ahora.toISOString(); // UTC
        ahora.toUTCString(); // ISO
    ```
    -..toLocaleString() *Devuelve una cadena con la fecha en version local.*
    ```javascript
        
        var ahora = new Date();
        console.info(ahora.toLocaleString());
        
        // Código de idioma IETF para Alemán
        console.info(ahora.toLocaleString("de-DE"));
        
        // Opciones Avanzadas para fechas
        var opciones = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'};
        console.log(ahora.toLocaleString("de-DE", opciones));
    ```
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    - Tiempo transcurrido:
    ```javascript
        var inicio = new Date();
        // + código
        var fin = new Date();
        var transcurso = fin.getTime() - inicio.getTime();
        console.info("Pasaron "+transcurso+"ms");
    ```
### Ejercicios

**1 -** Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año) usando una función.
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

- Solución 1:
```javascript

	// Opcion 1
	function verificadorDeFechas (day, month, year) {
		// Opcion 1
		var fecha = new Date(year, month-1, day);

		if (fecha.getFullYear() === year){
			var opciones = { 
			    weekday: 'long',
			    year: 'numeric', 
			    month: 'long', 
			    day: 'numeric'
			};
			var fechaFormato = fecha.getDate() + "/" + (fecha.getMonth()+1) +"/"+ fecha.getFullYear(); 
			
			console.info("La fecha es correcta", fechaFormato);
			console.info("La fecha en otro formato: ", fecha.toLocaleString("es-ES", opciones));
 
		} else {
			console.warn("Error! los datos no son correctos!");			
		}
	}
```

- Solución 2:
```javascript

	function verificadorDeFechas (day, month, year) {
		var fechaDetalle,
		fecha = day + "/" + month + "/" + year;

		if(day <= 31 && day > 0 && month <=12 && month > 0 && year >= 0){
			console.info("La fecha es correcta", fecha);

			switch (month) {
				case 1:
					fechaDetalle = day + " de Enero de " + year;
					break;
				case 2:
					fechaDetalle = day + " de Febrero de " + year;
					break;
				case 3:
					fechaDetalle = day + " de Marzo de " + year;
					break;
				case 4:
					fechaDetalle = day + " de Abril de " + year;
					break;
				case 5:
					fechaDetalle = day + " de Mayo de " + year;
					break;
				case 6:
					fechaDetalle = day + " de Junio de " + year;
					break;
				case 7:
					fechaDetalle = day + " de Julio de " + year;
					break;
				case 8:
					fechaDetalle = day + " de Agosto de " + year;
					break;
				case 9:
					fechaDetalle = day + " de Septiembre de " + year;
					break;
				case 10:
					fechaDetalle = day + " de Octubre de " + year;
					break;
				case 11:
					fechaDetalle = day + " de Noviembre de " + year;
					break;
				case 12:
					fechaDetalle = day + " de Diciembre de " + year;
					break;
			}

			console.info("La fecha en otro formato: ", fechaDetalle);

		} else {
			console.warn("Error! los datos no son correctos!");
		}

	}
```

**Truco**

Usar getters para modificar fechas (días, meses, etc...)

Nota: Partiendo del ejemplo de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)

- sin *getters*
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(24);
	theBigDay.toLocaleString() // 23/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(32);
	theBigDay.toLocaleString() // 31/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22);
	theBigDay.toLocaleString() // 21/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22 + 32 +24);
	theBigDay.toLocaleString() // 15/9/1962 23:00:00
```

- con *getters* 
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 24);  
	theBigDay.toLocaleString(); // 30/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 32);
	theBigDay.toLocaleString(); // 7/8/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22);
	theBigDay.toLocaleString(); // 28/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22 + 32 + 24);
	theBigDay.toLocaleString(); // 22/9/1962 23:00:00
```

### Ejercicios

**1 -** ¿Que fecha será dentro de 30 días?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setDate(ahora.getDate() + 30);
	console.log("En 30 días será " + ahora.toLocaleString());
```

**2 -** ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
```javascript
	var inicio = new Date(2017, 4, 25, 19, 0, 0);
	console.log("Fecha de inicio: " + inicio.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = ahora - inicio;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Han pasado " + diferencia +"ms");
	console.log("Han pasado "+ segundos +" segundos.");
	console.log("Han pasado "+ minutos +" minutos.");
	console.info("Han pasado "+ horas +" horas.");
	console.info("Han pasado "+ dias +" días.");
```

**3 -** ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
```javascript
	var fin = new Date(2017, 6, 18, 22, 0, 0);
	console.log("Fecha de finalización: " + fin.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = fin - ahora;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Quedan " + diferencia +"ms");
	console.log("Quedan "+ segundos +" segundos.");
	console.log("Quedan "+ minutos +" minutos.");
	console.info("Quedan "+ horas +" horas.");
	console.info("Quedan "+ dias +" días.");
```

**4 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setHours(ahora.getHours() + 10);
	ahora.setFullYear(ahora.getFullYear() + 1);
	console.log("En un año y 10 horas será " + ahora.toLocaleString());
```

**5 -** Imprimir por consola la fecha completa (formato texto) en koreano, japones.
```javascript
	var ahora = new Date();
	
	var opciones = { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	};
	
	console.log(ahora.toLocaleString("ko-KO", opciones));
	console.log(ahora.toLocaleString("ja-JA", { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	}));
```


### String

**Propiedades:**
- .length() *Devuelve la longitud*:
```javascript
var cadena = "Fictizia";

console.log("Fictizia tiene " + cadena.length + " caracteres.");

console.log("Una cadena vacia tiene " + ''.length + " caracteres.");
```
  
**Métodos:**

- .fromCharCode() *Devuelve una cadena creada mediante una secuencia [Unicode](https://www.wikiwand.com/es/Unicode)*:
```javascript
	console.info("Es es el año 2016 ("+ String.fromCharCode(8559,8559,8553,8548,8544) + ")");
```


- .anchor() *Crea un ancla HTML*:
```javascript
	document.body.innerHTML = "Contenidos".anchor("contenidos"); 
	// "<a name="contenidos">Contenidos</a>"
```


- .charAt() *Devuelve el carácter específico*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "'")
```


- .charCodeAt() *Devuelve el valor Unicode*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "', en unicode ("+cadena.charCodeAt(3)+")")
```


- .concat() *Combina el texto de dos o más cadenas*:
```javascript
var cadena1 = "Oh ";
var cadena2 = "qué maravillosa ";
var cadena3 = "mañana'.";
var combinacion = cadena1.concat(cadena2,cadena3);
console.log(combinacion); // devuelve "Oh qué maravillosa mañana'."
```


- .indexOf() *Devuelve el índice o -1*:
```javascript
"Mundo Web".indexOf("Web") // 6
"Mundo Web".indexOf("web") // -1
```


- .lastIndexOf() *Devuelve el índice de la última coincidencia o -1*:
```javascript
"Fictizia".lastIndexOf("i"); // 6
"Fictizia".lastIndexOf("f"); // -1
```


- .link() *Crea un enlace*:
```javascript
var textoActivo="Nuestro Curso"
var url="http://www.fictizia.com/formacion/curso_javascript"
document.body.innerHTML = "Haga click para volver a " + textoActivo.link(url);
```


- .slice() *Devuelve una cadena nueva con una sección de otra*:
```javascript
var cadena = "Fictizia";
console.log(cadena.slice(5)); // zia
console.log(cadena.slice(0, 5)); // Ficti
console.log(cadena.slice(3, -1)); // tizi
```


- .split() *Divide una cadena usando un separador*:
```javascript
function dividirCadena(cadenaADividir,separador) {
   var arregloDeCadenas = cadenaADividir.split(separador);
   console.log('<p>La cadena original es: "' + cadenaADividir + '"');
   console.warn('<br>El separador es: "' + separador + '"');
   console.log("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");

   var elementos = "";
   for (var i=0; i < arregloDeCadenas.length; i++) {
      elementos += arregloDeCadenas[i] + " / ";
   }

   console.info(elementos);

}

var cadenaVerso = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
```


- .substr() *Devuelve los caracteres de una cadena comenzando en la localización especificada, y en el número de caracteres especificado.*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substr(0,5)); // Ficti
console.log("(5,3): "    + cadena.substr(5,3)); // zia
```

- .substring() *Devuelve un subconjunto*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substring(0,5)); // Ficti
```


- .toLocaleLowerCase() *Devuelve todo en minúsculas con las características locales*:
```javascript
console.log('FICTIZIA'.toLocaleLowerCase()); // 'fictizia'
```

- .toLocaleUpperCase(Devuelve todo en mayúsculascon las características locales) **:
```javascript
console.log('fictizia'.toLocaleUpperCase()); // 'FICTIZIA'
```

- .toLowerCase() *Devuelve todo en minúsculas*:
```javascript
console.log('FICTIZIA'.toLowerCase()); // 'fictizia'
```


- .toUpperCase() *Devuelve todo en mayúsculas*:
```javascript
console.log('fictizia'.toUpperCase()); // 'FICTIZIA'
```

- .trim() *Elimina espacios vacios al principio y final de la cadena*:
```javascript
console.log('  Fictizia '.trim()); // 'Fictizia'
```

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```
    
- .isArray():
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```

- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .forEach() *Se ejecuta la función por cada elemnto del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemnto o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor*:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```

- .reduceRight() *Aplica una función a un acumulador y a cada valor (de izq. a dcha.) de un vector para reducirlo a un único valor*:
    ```javascript
  	var reduceRight = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduceRight); // 10
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```

- .sort() **:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

### Ejercicios

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
	function cuantasVeces (letra, texto) {
		
		var totalVeces = 0;
		var seleccionTexto = texto.split("");
		
		for (var i = 0; i <= seleccionTexto.length; i++) {
			
			if (seleccionTexto[i] === letra){
				totalVeces++
			};
			
		};
		
		return {
			letra: letra, 
			totalVeces: totalVeces, 
			texto: texto
		}
	}

var nombreVar = cuantasVeces ("h", "hola");


if(nombreVar.totalVeces > 0){
	console.log("Tenemos resultados....")
}

console.log("Se repite "+nombreVar.letra+" "+nombreVar.totalVeces+" veces... en "+nombreVar.texto)
```

**2 -** Junta estos tres Arrays *["Oscar", ...], [9897667, ...], [false, ...]* de tal forma que construyan un único Array anidado *[["Oscar", 9897667, false], [etc...]]* 

- Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana"],
		arreglo2 = [9897667, 81721623, 91823871, 71236123],
		arreglo3 = [false, true, true, false];
	
	var anidacion = [];
	
	for (var i = 0; i <= arreglo1.length; i++){
		var resumen = [arreglo1[i], arreglo2[i], arreglo3[i]];
		anidacion.push(resumen);
	}
	
	console.log("El resultado es %O", anidacion);
```

- Variante (Diferentes longitudes)
```javascript
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana", true, 4, 12, 12],
	    arreglo2 = [9897667, 81721623, 91823871, 71236123],
	    arreglo3 = [false, true, true, false];
	
	// Saber valor Máximo
	var maximo = Math.max(arreglo1.length, arreglo2.length, arreglo3.length);
	
	// Nivelar - Fase 1:
	arreglo1[maximo] = "";
	arreglo2[maximo] = "";
	arreglo3[maximo] = "";
	
	// Fix
	arreglo1.pop();
	arreglo2.pop();
	arreglo3.pop();
	
	
	var anidacion = [];
	
	for (var i = 0; i < arreglo1.length; i++){
	    anidacion.push([arreglo1[i], arreglo2[i], arreglo3[i]]);
	}
	
	console.log("El resultado es %O", anidacion); 
```

**3 -** Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

- Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
	var arrayPares = [], arrayImpares = [];
	
	for (var i = 0; i<100; i++){
		var random = Math.floor((Math.random() * 6) + 1)
		if(random % 2 !== 0){
			arrayImpares.push(random);
		} else {
			arrayPares.push(random);
		}
	}
	
	// Opcional
	arrayPares = arrayPares.sort();
	arrayImpares = arrayImpares.sort();
```


**4 -** Vamos a gestionar la lista de asistentes de un evento. 

- Características:
	- Cada asistente recibirá el identificador de su posición en el Array.
	- El identificador no puede cambiar una vez reservado el asiento.
	- Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
	- Los nuevos asistentes seran asigandos primero a asientos desocupados. 

- Opcional:
	- Verifica antes de asignar un asistente que no se registro previamente. 
```javascript
	var lista = [];
	
	function asignar(nombre) {
	    var registrado = false;
	    var vacante = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === undefined) {
	            vacante = i;
	        }
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        console.warn("Ya estabas registrado!");
	        console.info("Eres el asistente número", registrado);
	    } else {
	        if (vacante || vacante === 0) {
	            lista[vacante] = nombre;
	            console.info("Eres el asistente número", vacante);
	            console.info("Felicidades! has ocupado un asiento que estaba vacio.");
	        } else {
	            lista.push(nombre);
	            console.info("Eres el asistente número", lista.length - 1);
	            console.info("No quedan asientos vacios antes que el tuyo.");
	        }
	    }
	
	}
	
	function quitar(nombre) {
	    var registrado = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        lista[registrado] = undefined;
	        console.info("El asistente " + nombre + " ha sido eliminado.");
	        console.info("El asiento " + registrado + " esta vacio.");
	    } else {
	        console.warn("El asistente " + nombre + "... no existe!");
	    }
	}
	
	// Test:
	asignar("Fran");
	/*
	Eres el asistente número 0
	No quedan asientos vacios antes que el tuyo.
	*/
	asignar("Yo mismo");
	/*
	Eres el asistente número 1
	No quedan asientos vacios antes que el tuyo.
	*/
	quitar("fran"); // El asistente fran... no existe!
	quitar("Fran");
	/*
	El asistente Fran ha sido eliminado.
	El asiento 0 esta vacio.
	*/
	asignar("Carlos"); // Eres el asistente número 0
	asignar("Carlos");
	/*
	Ya estabas registrado!
	Eres el asistente número 0
	*/
```

**Arreglos avanzados**
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```
