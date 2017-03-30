/**
* @param {Function} fn 要缓存的函数
* @return {Function} 返回缓存的函数中的字符串或将原函数中的字符串存储进来
* @example
* 第一次：
* app => cache = {app: 'App'}
* 第二次：
* app => cache = {app: 'App'}，这时候仓库中已经存在 'app' 这个 key，因此调用 cache 中的 key 即可
* */

function cached(fn) {
  const cache = Object.create(null);

  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/*
 * Test
 * */

const capitalize = cached(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(capitalize('app'));  // App