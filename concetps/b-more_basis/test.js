class Node {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {      
      this.head = newNode;
      return;
    }

    let currentNode = this.head; 
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    
    currentNode.next = newNode
  }
}

const myLinkedList = new LinkedList();
console.log(myLinkedList);
myLinkedList.addNode({ node: 1, desc: "something here" });
myLinkedList.addNode({ node: 2, desc: "something here" });
myLinkedList.addNode({ node: 3, desc: "something here" });
myLinkedList.addNode({ node: 4, desc: "something here" });
myLinkedList.addNode({ node: 5, desc: "something here" });

console.log(myLinkedList);
