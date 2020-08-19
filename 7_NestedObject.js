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

// iterate2(testObj);
