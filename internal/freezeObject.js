/**
 * @param {Object} obj 要冻结对象
 * @return {Object} 返回被冻结的对象
 *
 * 所谓冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，
 * 以及不能修改该对象已有属性的可枚举性、可配置性、可写性。
 * 也就是说，这个对象永远是不可变的。
 *
 * */

function freezeObject(obj) {
  return Object.freeze(obj);
}

/*
* Test
* */
const obj = {
  a: 1
};

freezeObject(obj);

obj.a = 2;
obj.b = 2;

console.log(obj);  // { a: 1 }