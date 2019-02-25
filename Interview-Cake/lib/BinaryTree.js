class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

BinaryTreeNode.prototype.insertLeft = value => {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = value => {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

module.exports = BinaryTreeNode;
