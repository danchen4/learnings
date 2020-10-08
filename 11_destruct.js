const obj = {
  // name: 'John',
  // age: 28,
  nested: {
    name: 'Jill',
    age: 45,
  },
  doSomething(number) {
    console.log(number);
  },
};

const arr = ['Hello', 1, true];

let {
  nested: { name, age },
} = obj;

// console.log(name); //John
// console.log(age); //28
console.log(name); //Jill
console.log(age); //45
