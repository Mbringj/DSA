function Qeue(array) {
  this.array = array;
}

Qeue.prototype.bufferQeue = function () {
  return this.array.slice();
}
Qeue.prototype.isEmpty = function () {
  return this.array.length == 0;
}; 

Qeue.prototype.Enqeue = function (value) {
  this.array.push(value);
};

Qeue.prototype.deqeue = function () {
  return this.array.shift();
};

function accessNthTopNodeQeue(qeue, n) {
  if (n<0) {
    throw 'error invalide input';
  }
  let arrayBuffer = qeue.bufferQeue();
  let bufferQeue = new Qeue(arrayBuffer);

  while(--n!=0) {
    qeue.deqeue();
  }
  return qeue.deqeue();
}

function SearchQeue(qeue, e) {

  let arrayBuffer = qeue.bufferQeue();
  let bufferQeue = new Qeue(arrayBuffer);

  while(!qeue.isEmpty()) {
    if(qeue.deqeue() == e) {
      return true;
    }
  }

  return false;
};

function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.Customers = new Qeue([]);
}

Cashier.prototype.AddOrder = function (customer) {
  this.Customers.Enqeue(customer);
}

Cashier.prototype.deliverOrder = function () {
  let finishedCustomer = this.Customers.deqeue();
  console.log(finishedCustomer.name + ", your "+ finishedCustomer.order+ " is ready !");
}

let cashier = new Cashier();

let customer1 = new Customer("Jim", "friet");
let customer2 = new Customer("sammy", "burger");
let customer3 = new Customer("sandra", "burger");

cashier.AddOrder(customer1);
cashier.AddOrder(customer2);
cashier.AddOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();