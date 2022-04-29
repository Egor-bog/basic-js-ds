 //const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootT = null;
    this.minT = null;
    this.maxT = null;
  }

  root() {
    return this.rootT;
 }

  add(data) {
    const newNode = new Node(data)
    if(!this.rootT) {
      this.rootT = newNode;
      return;
    }

    let currentNode = this.rootT;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }

    }

  }

  has(data) {
    const arr = [this.rootT];
    let arrData = [this.rootT.data]

    while(arr.length) {
      const node = arr.shift();

      if(node.left) {
        arr.push(node.left);
        arrData.push(node.left.data);
      }
      if(node.right) {
        arr.push(node.right);
        arrData.push(node.right.data);
      }
    }
    return arrData.includes(data)

  }

  find(data) {
    const arr = [this.rootT];
    let arrNode = [this.rootT]

    while(arr.length) {
      const node = arr.shift();

      if(node.left) {
        arr.push(node.left);
        arrNode.push(node.left);
      }
      if(node.right) {
        arr.push(node.right);
        arrNode.push(node.right);
      }
    }

    return arrNode.find(node => node.data == data)
  }

  remove(data) {
    if (data === null) {
      return null;
    }

    return this.rootT = this.deleteNode(this.rootT, data);
  }


  deleteNode(currentNode, itemValue) {
    if (currentNode.data === itemValue) {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      }

      if (currentNode.left === null) {
        return currentNode.right;
      }

      if (currentNode.right === null) {
        return currentNode.left;
      }

      // если у ноды есть оба потомка
      const minNodeInRightSubtree = this.findMinElement(currentNode.right);
      currentNode.data = minNodeInRightSubtree.value;

      currentNode.right = this.deleteNode(
        currentNode.right,
        minNodeInRightSubtree.value
      );
      return currentNode;
    }

    if (itemValue < currentNode.data) {
      if (currentNode.left === null) {
        console.warn(elementNotFoundMessage);
        return currentNode;
      }

      currentNode.left = this.deleteNode(currentNode.left, itemValue);
      return currentNode;
    }

    if (itemValue > currentNode.data) {
      if (currentNode.right === null) {
        console.warn(elementNotFoundMessage);
        return currentNode;
      }

      currentNode.right = this.deleteNode(currentNode.right, itemValue);
      return currentNode;
    }
  }

  findMinElement(node) {
    if (node.left === null) return node;

    return this.findMinElement(node.left);
  }


  min() {
    this.minT = this.rootT;
     let nextNode = this.minT;
       while(nextNode !== null) {
         nextNode = this.minT.left;
         if(nextNode) {this.minT = nextNode;
        } else {
          break}
       }
    return this.minT.data;
  }



  max() {
    this.maxT = this.rootT;
     let nextNode = this.maxT;
       while(nextNode !== null) {
         nextNode = this.maxT.right;
         if(nextNode) {this.maxT = nextNode;
        } else {
          break}
       }
    return this.maxT.data;  
  }
}

module.exports = {
  BinarySearchTree
};