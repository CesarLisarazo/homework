'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función.
 Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  let contador = 1
   return function(){
    return contador ++ 
  }

}


/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto 
con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) 
de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará 
  (tip: si usaste un objeto, podés usar hasOwnProperty) */

// Esta función de JavaScript se llama cacheFunction y es un ejemplo de una función de orden superior. 
// Toma una función cb como argumento y devuelve una nueva función que actúa como una especie de caché para la función cb. 
// A continuación, explicaré paso a paso qué hace esta función y cómo funciona

function cacheFunction(cb) {
  let cache = {}; // Aquí se inicializa un objeto vacío para almacenar en caché los resultados de la función.

  // Aquí se define y devuelve una función interna que actúa como un caché para la función cb.
  return function(arg) {
    // Verifica si el objeto cache tiene una propiedad con el nombre arg.
    if (cache.hasOwnProperty(arg)) {
      // Si el resultado para arg ya está en caché, simplemente devuelve ese resultado.
      return cache[arg];
    } else {
      // Si el resultado para arg no está en caché, calcula el resultado llamando a la función cb(arg) y lo almacena en caché.
      // Luego, devuelve ese resultado recién calculado.
      return (cache[arg] = cb(arg));
    }
  };
}

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno,
   respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);// Franco
let getNombreAlumno = getNombre.bind(alumno); //Juan

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena  (string)  y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). 
  Las funciones obtenidas deberían recibir solamente un argumento - 
  la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(false,'*','*',); 
let textoGuiones = crearCadena.bind(this,'-','-',);
let textoUnderscore = crearCadena.bind(this,'_','_',);

console.log(textoAsteriscos("juan"))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
