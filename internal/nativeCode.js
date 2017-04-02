/**
 * @param {Object} constructor 要检查的字符串
 * @return {Object} 判断传入的值是否为 JavaScript 内置的
 *
 * */
function nativeCode(constructor) {
  return /native code/.test(constructor.toString());
}

/*
* Test
* */
const add = (x, y) => x + y;

console.log(nativeCode(Promise));  // true
console.log(nativeCode(Array));  // true
console.log(nativeCode(add));  // false