/**
* @param {String|Number} val 传入的值
* @return {Boolean} 如果传入的值是原始类型则返回 `true`，否则返回 `false`
*
* */

function isPrimitive(val) {
  const type = typeof val;
  return type === 'string' || type === 'number';
}

/*
 * Test
 * */

console.log(isPrimitive('a'));  // true
console.log(isPrimitive(123));  // true
console.log(isPrimitive([1, 2, 3]));  // false