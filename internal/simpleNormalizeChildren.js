function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    if(Array.isArray(children)) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
}


/*
* Test
* */

const child = [1, 2, [3, 4]];
console.log(simpleNormalizeChildren(child));  // [ 1, 2, 3, 4 ]
