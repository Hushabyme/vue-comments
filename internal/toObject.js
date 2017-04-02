/**
 * @param {Array} array 目标数组
 * @return {Object} 返回属性混合后的目标对象
 *
 * */

function isObject(array) {
  const result = {};

  for(let i = 0; i < array.length; i++) {
    if(array[i]) {
      extend(result, array[i]);
    }
  }

  return result;
}

function extend(to, from) {
  for(let key in from) {
    to[key] = from[key];
  }
  return to;
}

/*
 * Test
 * */

console.log(isObject([
  {a: 1},
  {b: 2},
  {c: 3},
  ])
);  // { a: 1, b: 2, c: 3 }
