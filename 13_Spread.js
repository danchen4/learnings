const obj2 = {
  deals: [
    {
      id: 1,
      name: 'Dan',
      age: 38,
    },
    {
      id: 2,
      name: 'Jing',
      age: 33,
    },
  ],
};

const obj2_sub = {
  id: 3,
  name: 'Jing',
  age: 35,
};

let poop;

// Spread obj2 (with a nested array) into new object and compare to see if nested array is the same - SAME
poop = { ...obj2 };
console.log(poop.deals === obj2.deals); //true

// Spread obj2 (with nested array) into new object, then overwrite property value with original array and compare - SAME
poop = {
  ...obj2,
  deals: obj2.deals,
};

console.log(poop.deals === obj2.deals); //true

// Spread obj2 (with nested array) into new object, then overwrite property value original array spread over new array - DIFFERENT
poop = {
  ...obj2,
  deals: [...obj2.deals],
};

// Array is different
console.log(poop.deals === obj2.deals); // false
// Objects in array are the same
console.log(poop.deals[0] === obj2.deals[0]); //true

// Same as above, but add object obj2_sub to the end of the array and see if it's the same with original (obj2_sub) - SAME
poop = {
  ...obj2,
  deals: [...obj2.deals, obj2_sub],
};
console.log(poop.deals[2] === obj2_sub); //true

// Same as above, but add a new object by spreading obj2_sub to the end of the array and see if it's the same with original (obj2_sub) - DIFFERENT
poop = {
  ...obj2,
  deals: [...obj2.deals, { ...obj2_sub, name: 'Haj', age: 47 }],
};
console.log(poop);
console.log(poop.deals[2] === obj2_sub); //false

/**
 * Overwriting (or adding property) property
 */

const obj3 = {
  id: 4,
  name: 'Joe',
};

const obj4 = { ...obj3, name: 'Josephine', age: 57 }; //by spreading obj3 into a new object, then updating / adding new property
console.log(obj4); //{id: 4, name: 'Josephine', age: 57 }
console.log(obj3 === obj4); // false
