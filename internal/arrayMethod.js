const arrayProto = Array.prototype;
const arrayMethod = Object.create(arrayProto);

console.log(arrayMethod);  //  Array {}

['push', 'pop', 'unshift', 'shift', 'splice','sort', 'reverse']
.forEach(method => {
  const original = arrayProto[method];

  def(arrayMethod, method, (...args) => {
    const result = original.apply(this, args);
    const ob = this.__ob__;

    let inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }

    return result;
  })
});

function def(obj, key, val, enumerable) {
  return Object.defineProperty(obj, key, {
    value: val,
    enumerable: enumerable,
    writable: true,
    configurable: true
  })
}