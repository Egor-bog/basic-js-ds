const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 
function removeKFromList(l, k) {
  //   проверяем первые значения в списке == k, тогда меняем начало списка, на следующий елемент
  while (l.value == k) {
    l = l.next;
  }

  currentNode = l; 
  nextNode = currentNode.next; 
  //  проверяем на совпадения весь список до конца
  while (nextNode != null) { 
    if (nextNode.value == k) {
      if(nextNode.next == null) {currentNode.next == null}
      if(nextNode.next.value == k) {
        currentNode.next = nextNode.next.next;
      } else {
        currentNode.next = nextNode.next;
      }
      
      // console.log(nextNode.value + '  ' + nextNode.next.value);
      // //  перенаправляем ссылку через 1 елемент
      // currentNode.next = nextNode.next;
      // // проверяем на последний елемент список
      if (nextNode.next == null) break;
    }

    //  перезаписываем начало и следующий елемент на шаг вперед
    currentNode = nextNode;
    nextNode = nextNode.next;
  }
  return l;
}

module.exports = {
  removeKFromList
};
