/**
 * @param {Object|Array} list 要转换的列表
 * @param {Number} start 从此索引出开始转换
 * @return {Array} result 返回一个拥有指定索引值开始到结尾的新数组
 *
 * */

function toArray(list, start = 0) {
  let index = list.length - start;
  const result = new Array(index);

  while (index--) {
    result[index] = list[index + start];
  }

  return result;
}

/*
 * Test
 * */

const array = [1, 2, 3, 4, 5];
const real = toArray(array, 2);

console.log(real);  // [3, 4, 5]
