/**
 * @param {Object} obj 要检查的对象
 * @return {Object} 如果是一个对象则返回 `true`，否则返回 `false`
 *
 * */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/*
 * Test
 * */

console.log(isObject({a: 1}));  // true
console.log(isObject('abc'));  // false
console.log(isObject([1, 2, 3]));  // true