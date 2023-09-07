"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.root = value;
  this.left = null;
  this.right = null;
}

// BinarySearchTree.prototype.insert = function (value) {
//   if (value < this.root) {
//     if (this.left) {
//       this.left.insert(value);
//     } else {
//       this.left = new BinarySearchTree(value);
//     }
//   } else if (value > this.root) {
//     if (this.right) {
//       this.right.insert(value);
//     } else {
//       this.right = new BinarySearchTree(value);
//     }
//   }
// };



BinarySearchTree.prototype.depthFirstForEach = function (cb, pedido) {
  if (pedido == "in-order" || pedido == undefined) {
    if (this.left) this.left.depthFirstForEach(cb, pedido);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, pedido);
  } else if (pedido == "pre-order") {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, pedido);
    if (this.right) this.right.depthFirstForEach(cb, pedido);
  } else if (pedido == "post-order") {
    if (this.left) this.left.depthFirstForEach(cb, pedido);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, pedido);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
