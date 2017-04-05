class VNode {
  constructor(tag, data, children, text, elm, context, componentOptions) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
  }
}

const prototypeAccess = {
  child: {}
};

prototypeAccess.child.get = () => this.componentInstance;

Object.defineProperties(VNode.prototype, prototypeAccess);

const createTextVNode = val => new VNode(undefined, undefined, undefined, String(val));

const cloneVNode = function (vnode) {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;

  return cloned;
};

const CloneVnodes = function (vnodes) {
  const result = new Array(vnodes.length);
  for (let i = 0; i < vnodes.length; i++) {
    result[i] = cloneVNode(vnodes[i]);
  }

  return result;
};

/*
* Test
* */

console.log(createTextVNode('Hello World!'));