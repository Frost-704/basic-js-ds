const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  root() {
    this.root = new Node(data);
  }

  add(data) {
    let newData = new Node(data);

    const move = (node) => {
      if (data < node.value) {
      if(node.left === undefined) {
        node.left = newData;
      } 
      } else {
        move(node.left)
      }
      if (data > node.value) {
        if (node.right === undefined) {
          node.right = newData;
        }
        else {
          move(node.right)
        }
    }
    }
    this.move(this.root)
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};