/**
* @param {Array} array 初始的数组
* @param {Object} item 要删除的元素
* @return {Array} 返回该元素组成的数组，否则返回 undefined
* */

function remove(array, item) {
  if(Array.isArray(array) && array.length) {
    const index = array.indexOf(item);
    if(index > -1) {
      return array.splice(index, 1);
    }
  }
}

/*
 * Test
 * */

console.log(remove([1, 2, 3], 2));  // [2]
console.log(remove([1, 2, 3], 4));  // undefined