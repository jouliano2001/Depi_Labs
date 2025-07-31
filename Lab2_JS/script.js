// 1. Capitalize first letter of each word
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 2. Merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

// 3. Sum of squares using reduce
function sumOfSquares(arr) {
  return arr.reduce((sum, num) => sum + num * num, 0);
}

// 4. Filter array with custom callback (no built-in filter)
function filterArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 5. Map array with custom callback (no built-in map)
function mapArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// 6. Reduce array with custom callback (no built-in reduce)
function reduceArray(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// 7. forEach array with custom callback (no built-in forEach)
function forEachArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// 8. Find max using Math.max()
function findMax(arr) {
  return Math.max(...arr);
}

// 9. Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 10. Invert object keys and values
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}

// 11. Omit specified keys
function omitKeys(obj, keys) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 12. Pick only specified keys
function pickKeys(obj, keys) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// 13. Reverse array (returns new array)
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// 14. Count occurrences of a value in an array
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
