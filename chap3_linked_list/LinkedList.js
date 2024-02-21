function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
}

SinglyLinkedList.prototype.insert = function (value) {
  if(this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temps = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temps;
  }

  this.size++;
}

SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if(currentHead.data == value) {
    this.head = currentHead.next;
    this.size--; 
  } else {
    let prev = currentHead;
    while(currentHead.next) {
      if(currentHead.data == value) {
        prev.next = currentHead;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    } 
    
    if(currentHead.data == value) {
      prev.next = null;
    }

    this.size--;
  }
} 

let list = new SinglyLinkedList();

list.insert(1);
list.insert(4);
list.remove(4);
list.insert(5);
console.log(list);