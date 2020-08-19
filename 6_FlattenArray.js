let array = [1, 2, [3, 4, [5, 6], 7], 8, [9, [10, 11]]];
// Required output: [1,2,3,4,5,6,7,8,9,10,11]

function flatten(array, flat = []) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], flat);
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}

// Answer
//#region
function flat1(arr, flatArray = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat1(arr[i], flatArray);
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}

const flat2 = (arr) => {
  const newArray = [];
  for (let item of arr) {
    newArray.push(...(Array.isArray(item) ? flat2(item) : [item]));
  }
  return newArray;
};

//#endregion

console.log(flatten(array));
console.log(flat1(array));
console.log(flat2(array));