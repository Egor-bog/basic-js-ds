const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

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
    this.rootT = removeNode(this.rootT, data);

    function removeNode(node, data) {
      if (!node) {
        return;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // если искомое значение равно значению, которое нашли
        if (!node.left && !node.right) {
          // если у ноды нет детей, то заменяем ноду на нулл
          return null;
        }

        // если у ноды нет левого литя, то заменяем ноду на правую сторону
        if (!node.left) {
          node = node.right;
          return node;
        }
        // если у ноды нет правого литя, то заменяем ноду на левую сторону
        if (!node.right) {
          node = node.left;
          return node;
        }

        // если у ноды есть оба и правое и левое дитя
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
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