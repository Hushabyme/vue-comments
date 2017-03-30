/**
* @param {String} str 要传入的字符串
* @param {Boolean} expectsLowerCase 是否期望转换成小写形式
* @return {Function} 返回一个函数，检查 key 是否在此 map 中
* */

function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');

  for(let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val];
}

/*
 * Test
 * */

console.log(makeMap('slot,component', true));  // val => map[val.toLowerCase()]