// Create a stack with push, pop, peek, print

// Create a queue with two stacks with add, remove, get

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
s.pop();
s.push(1);
s.push(2);

console.log(s.pop()); // returns 2
console.log(s.pop()); // returns 1

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(value) {
    this.stack1.push(value);
  }

  remove() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const removed = this.stack2.pop();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return removed;
  }

  peek() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    const peeked = this.stack2.peek();
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    return peeked;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2
console.log(q.remove()); // returns 3
