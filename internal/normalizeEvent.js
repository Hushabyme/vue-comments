function normalizeEvent(name) {
  const once$$1 = name.charAt(0) === '~';
  name = once$$1 ? name.slice(1) : name;

  const capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;

  return {
    name: name,
    once: once$$1,
    capture: capture
  }
}

/*
* Test
* */

console.log(normalizeEvent('~good'));  // { name: 'good', once: true, capture: false }
console.log(normalizeEvent('!good'));  // { name: 'good', once: false, capture: true }
console.log(normalizeEvent('good'));  // { name: 'good', once: false, capture: false }
