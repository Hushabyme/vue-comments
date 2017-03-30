/**
* @param {Object} obj 要检查的对象
* @param {string} key 要检查的 key
* @return {Boolean} 如果对象中存在该属性，则返回 `true`，否则返回 `false`
*
* */

function hasOwn(obj, key) {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(obj, key);
}

/*
* Test
* */

const obj = {
  a: 1,
  b: 2
};

console.log(hasOwn(obj, 'a'));  // true
console.log(hasOwn(obj, 'c'));  // false