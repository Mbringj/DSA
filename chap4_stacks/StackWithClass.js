class Stack {
  constructor(array) {
    this.array = [];
  }

  getBuffer() {
    return this.array.slice()
  }

  isEmpty() {
    return this.array.length == 0;
  }

  push(value) {
    this.array.push(value);
  }

  peeks() {
    let last = this.array.length-1;
    return this.array[last];
  }
}

let stack = new Stack();

console.log(stack);
stack.push(10);
stack.push(5);
console.log(stack);
console.log(stack.peeks());
stack.push(25);
stack.push(24);
stack.push(3);
stack.push(2);

console.log(stack.peeks());