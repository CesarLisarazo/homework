'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(data) { // 7
  
  let node = new Node(data); // Node{data: 7, next: null}
  
  let current = this.head; // Node{data: 2: next: data: 7: next: null         if current.next.next=null  current.next=null
 
  if (current === null) { // entra UNA única vez - ¿cuándo? --> cuando agrego el PRIMER nodo
      this.head = node; // 
      return node
  }
  while (current.next){ // acá recorremos la lista - ¿cuándo entra? --> cuando ya hay más de 2 nodos
      current = current.next; // vamos pisando la variable current, con la referencia del siguiente nodo hasta que el next sea null, 
                              // es decir, hasta que encuentre el último nodo de la lista
  }
  current.next = node; // 



}

function Node(value) {
  this.value = value; 
  this.next = null;
}



LinkedList.prototype.remove = function(){
 let current = this.head
if(current==null) return null

else if (this.head.next==null) {
let memoria = this.head.value
this.head=null
return memoria
}

while( current.next.next != null){
  
 current = current.next
}

let memoria = current.next.value
current.next=null
return memoria


}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del 
  input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera 
  determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el 
  conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {

  this.table=[]; 
  this.numbuckets=35 //cantidad de ubicaciones disponibles (lockers)
  }


HashTable.prototype.hash= function(key){
    let hash=0
    for (let i =0; i<key.length; i++){
      hash += charCodeAt(i); // da un valor numerico al hash para saber en donde guardar el nuevo par key:value 

    }
    return hash %  this.numbuckets // para que no sea un numero mayor al de los casilleros disponibles  
}


HashTable.prototype.set= function(key,value){

  if(typeof key !== 'string') throw TypeError('Keys must be strings')
  let index = this.hash(key)

  if(!this.table[index]){   //Me fijo si el espacio esta vacio para no pisarlo, si está vacio creo un objeto vacio al cual irá el par key:value 
  this.table.index= {}
  }
  
  this.table[index][key] = value
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
