/**
 * @param {Object} obj 要检查的对象
 * @return {Object} 如果是纯对象则返回 `true`，否则返回 `false`
 *
 * */
function isPlainObject(obj) {
  const OBJECT_STRING = '[object Object]';
  const toString = Object.prototype.toString;

  return toString.call(obj) === OBJECT_STRING;
}

/*
 * Test
 * */

console.log(isPlainObject('abc'));  // false
console.log(isPlainObject([1, 2, 3]));  // false
console.log(isPlainObject({a: 1, b: 2}));  // true
