/**
 * @param {Function} fn 要绑定的函数
 * @param {Object} ctx 要绑定的上下文
 * @param {Object} args 要绑定的参数
 * @return {Function} 返回一个函数，根据参数的个数来调用相应的函数
 *
 * */

function bind(fn, ctx, ...args) {
    const length = args.length;
    return length
      ? length > 1
        ? fn.apply(ctx, args)
        : fn.call(args[0])
      : fn.call(ctx);
}

/*
 * Test
 * */

const bindMe = bind(Math.max, null, 1, 2, 3);
console.log(bindMe);  // 3

const bindMe2 = bind((a, b) => a * b, null, 2, 3);
console.log(bindMe2);  // 6



