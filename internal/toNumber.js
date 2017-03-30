/**
* @param val 要检查的值
* @return {Number} 如果转化后值为 Number 类型，则返回该值；否则返回原值
* */

function toNumber(val) {
  const num = Number.parseFloat(val);
  return Number.isNaN(num) ? val : num;
}

/*
 * Test
 * */

console.log(toNumber('123'));  // 123
console.log(toNumber('abc'));  // "abc"
console.log(toNumber('123abc'));  // 123