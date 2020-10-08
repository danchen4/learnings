const testObj = {
  name: 'Dan',
  age: 29,
  address: {
    street: '123 Street',
    state: 'NY',
    zip: 10036,
  },
  parent: {
    nest1: {
      nest1_prop: 100,
      nest2: {
        nest2_prop: 200,
      },
    },
  },
};

// Iterating though nested objects and listing all the key value pairs

function printObj(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`key: ${key}, value: ${value}`);
    if (typeof value === 'object') {
      printObj(value);
    }
  }
}

// Answer
//#region
const iterate = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(`key: ${key}, value: ${obj[key]}`);
    if (typeof obj[key] === 'object') {
      iterate(obj[key]);
    }
  });
};
//#endregion

console.log(Object.entries(testObj));
