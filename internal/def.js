/**
 * @param {Object} obj 目标对象
 * @param {String} key 对象的属性
 * @param {Object} val 对象属性的值
 * @param {Boolean} enumerable 来源对象
 * @return {Object} 返回定义后的对象
 *
 * */

function def(obj, key, val, enumerable) {
  return Object.defineProperty(obj, key, {
    value: val,
    enumerable: enumerable,
    writable: true,
    configurable: true
  })
}

/*
* Test
* */

const obj = def({}, 'a', 1, true);
console.log(obj);  // { a: 1 }
