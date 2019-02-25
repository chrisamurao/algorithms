/**
 * *Scenario:
 * Suppose you needed a function to find out if a binary tree had leaves which differed by
 * a maximum of one. This is called superbalanced (made up term).
 *
 * Example.
 *
 * * Problem:
 *
 * We have to compare a lot of leaves and collect their depths.
 * How are we going to evaluate the condition that the trees differ by a maximum of one?
 *
 * * Strategy:
 *  Re-Define the problem:
 *  We must traverse a binary tree, we know that for sure.
 *  We must save the depth data when we come across a leaf.
 *  A leaf is a node with no children.
 *  We must choose depth-first or breadth first search
 *    Let's choose depth-first
 *  If we come across a new depth, we can check the depths and see if we fail the test case
 *  The test case: depth1 > depth2 + 1 (a short circuit is if there are 3 distinct depths)
 *
 *
 * One way:
 * Time complexity: O(n), where n is the amount of nodes in the tree.
 * This is optimal, we have to go to all the nodes
 * Space complexity:
 * We have two data structures keeping track of information:
 *  depths : this will hold a maximum of three elements, we can call this O(1)
 *  nodes: Worst case is that O(n)
 *
 * Takeaways:
 * Remember that depth first search uses a stack, and breadth first uses a queue.
 */

//import libraries

function isSuperbalanced(rootNode) {
  const depths = []; //save depth data
  const nodes = []; // nodes stack
  nodes.push([rootNode, 0]);

  while (nodes.length) {
    let currentNodeAndDepth = nodes.pop();
    let currentNode = currentNodeAndDepth[0];
    let currentDepth = currentNodeAndDepth[1];

    //if leaf, save data
    if (!currentNode.left && !currentNode.right) {
      depths.push(currentDepth);

      // upon new depth added, we can check for failure
      if (
        depths.length > 2 ||
        (depths.length === 2 && Math.abs(depths[1] - depths[0]))
      ) {
        return false;
      }
    } else {
      //not a leaf, keep moving by adding to stack
      if (currentNode.left) {
        nodes.push([currentNode.left, currentDepth + 1]);
      }
      if (currentNode.right) {
        nodes.push([currentNode.right, currentDepth + 1]);
      }
    }
  }

  return true;
}
