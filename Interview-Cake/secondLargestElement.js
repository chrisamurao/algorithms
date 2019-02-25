/**
 * Write an element to find the 2nd largest element in a binary search tree.
 *
 * Strategy: It is relatively simple to find the largest in a BST:
 *    Walk down the right side every time until there is not more right side.
 *
 * We can use this to find the second largest by:
 * identifying the conditions where a node would be the second largest.
 *
 * We walk downt the right side until there is not two children.
 *
 * If there is nothing on the left but only on the right, then the right child is largest in the tree,
 * and the parent node is the second largest.
 *
 * If there is something on the right, but not on the left, then the parent node is the largest in the tree.
 * The child node on the left is a subtree, which is bounded by the parent.
 * The largest of this subtree is the 2nd largest of the entire tree.
 *
 * We can use our original algorithm to find the largest on this subtree to find the answer.
 *
 *
 * Complexity:
 * Time: O(h), with h = height of the tree
 * Space: O(1)
 */

//import binary tree

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) {
      return current.value;
    }
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (rootNode.left && rootNode.right)) {
    throw new Error("Tree must have at least 2 nodes");
  }

  let current = rootNode;

  while (current) {
    //case: current is largest and has a left subtree
    //2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    //case: current is parent of largest, and largest has no
    // children, so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}
