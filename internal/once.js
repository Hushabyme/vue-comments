/**
 * @param {Function} fn 目标对象
 * @return {Function} 返回属性混合后的目标对象
 *
 * */

function once(fn) {
  let called = false;

  return () => {
    if(!called) {
      called = true;
      fn();
    }
  }
}