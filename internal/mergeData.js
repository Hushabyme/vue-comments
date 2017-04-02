function mergeData(to, from) {
  if (!from) return to;

  const keys = Object.keys(from);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // console.log(key);  // a d
    const toVal = to[key];
    // console.log(toVal);  // 1 2
    const fromVal = from[key];
    // console.log(fromVal);  // 3 4
    if (!hasOwn(to, key)) {
      set(to, key, fromVal)
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}

function hasOwn(obj, key) {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(obj, key);
}

function set(obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return false;
  }
}

function isPlainObject(obj) {
  const OBJECT_STRING = '[object Object]';
  const toString = Object.prototype.toString;

  return toString.call(obj) === OBJECT_STRING;
}

/*
 * Test
 * */

const obj = {
  a: 1,
  b: 2
};

const obj1 = {
  c: 3,
  d: 4
};

console.log(mergeData(obj, obj1));