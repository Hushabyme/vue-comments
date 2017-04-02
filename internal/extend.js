/**
 * @param {Object} to 目标对象
 * @param {Object} from 来源对象
 * @return {Object} 返回属性混合后的目标对象
 *
 * */

function extend(to, from) {
  for(let key in from) {
      to[key] = from[key];
  }
  return to;
}

/*
 * Test
 * */

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  a: 3,
  c: 4
};

console.log(extend(obj1, obj2));  // { a: 3, b: 2, c: 4 }