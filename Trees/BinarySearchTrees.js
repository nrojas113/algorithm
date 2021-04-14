/*
Today you will write a series of iterator functions for trees.

breadthFirst
  - each level of the tree is printer in order
depthFirstPreOrder
  - children nodes are visited before sibling nodes
depthFirstPostOrder
  - a node is not travered until all its children are reached

Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

*/

function node(val) {
  return {
    val,
    children: [],
  };
}

var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

//BREADTH FIRST SEARCH

const breadthFirst = (startingNode, callback) => {
  // we use a queue to iterate over the tree
  // progressively adding the children as we go
  // The tree begins with the first node
  const queue = [startingNode];
  // you might want to consider handling edges cases
  /// such as not receiving a properly formatted node
  // or make a proper Node constructor/prototype (see below)
  while (queue.length) {
    // we shift off the array instead of iterating with a counter
    // as we are treating it as a queue (FIFO)
    const node = queue.shift();
    callback(node.value);
    // es6 format:
    queue.push(...node.children);
    // es5 might look like this if queue were a var (or let) instead of const
    // queue = queue.concat(node.children)
    // or:
    // queue.push.apply(queue, node.children)
  }
};

// depth first seems trivial in comparison! Simply log the value
// and then call the function on each node
const depthFirstPreOrder = (startingNode, callback) => {
  callback(startingNode.value);
  startingNode.children.forEach((child) => {
    depthFirstPreOrder(child, callback);
  });
};

const depthFirstPostOrder = (startingNode, callback) => {
  startingNode.children.forEach((child) => {
    depthFirstPostOrder(child, callback);
  });
  callback(startingNode.value);
};
