function BinaryTreeNode(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

function BinaryTree(root) {
  this._root = root;
}

function createTree() {
  let root = new BinaryTreeNode(42);

  root.left = new BinaryTreeNode(41);
  root.right = new BinaryTreeNode(50);

  root.left.left = new BinaryTreeNode(10);
  root.left.right = new BinaryTreeNode(40);

  root.right.left = new BinaryTreeNode(45);
  root.right.right = new BinaryTreeNode(75);
 
  return root;
}

function preOrder(root) {
  if( root === null ) return;
  console.log(root.data);

  preOrder(root.left);
  preOrder(root.right);
}



let root = createTree();
preOrder(root);

let binaryTree = new BinaryTree(root);

console.log(binaryTree);