function Stack(array) {
  this.array = array;
}

Stack.prototype.getBuffer = function() {
  return this.array.slice();
}

Stack.prototype.isEmpty = function() {
  return this.array.length == 0;
}

Stack.prototype.peek = function() {
  return this.array[this.array.length - 1];
}

Stack.prototype.push = function(value) {
  this.array.push(value);
}

Stack.prototype.pop = function() {
  return this.array.pop();
}

function accessNthTopNode(stack, n) {
  let bufferArray = stack.getBuffer();

  if(n<0) {
    throw 'error';
  }

  let bufferStack = new Stack(bufferArray);

  while(--n!=0) {
    bufferStack.pop();
  }

  return bufferStack.pop();
}

function searchElementInStack(stack, element) {
  let bufferArray = stack.getBuffer();

  let bufferStack = new Stack(bufferArray);
  let position = 0
  while(!bufferStack.isEmpty()) {
    position++;
    if(bufferStack.pop() == element) {
      return position;
    }
  }

  return false;
}


let stack = new Stack([]);
console.log(stack);

stack.push(10);
stack.push(5);
stack.push(3);


console.log(stack)
console.log(accessNthTopNode(stack, 1))
console.log(searchElementInStack(stack, 10))
