function getDes(obj, key) {
  return Object.getOwnPropertyDescriptor(obj, key);
}

console.log(getDes({a: 1}, 'a'));  // { value: 1, writable: true, enumerable: true, configurable: true }
