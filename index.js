function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection) === false) break;
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (callback(collection[key], key, collection) === false) break;
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (value, key) => {
    result.push(callback(value, key));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  const isArray = Array.isArray(collection);
  let keys = isArray ? null : Object.keys(collection);
  let startIndex = 0;

  if (acc === undefined) {
    if (isArray) {
      acc = collection[0];
      startIndex = 1;
    } else {
      acc = collection[keys[0]];
      keys = keys.slice(1); // Skip the first key
    }
  }

  if (isArray) {
    for (let i = startIndex; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    for (let key of keys) {
      acc = callback(acc, collection[key], collection);
    }
  }

  return acc;
}

function myFind(collection, predicate) {
  let found;
  myEach(collection, (value, key) => {
    if (predicate(value, key)) {
      found = value;
      return false; // Stop iteration early
    }
  });
  return found;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, (value, key) => {
    if (predicate(value, key)) {
      result.push(value);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
