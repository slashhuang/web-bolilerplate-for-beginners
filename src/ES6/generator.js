// 一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）。
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
};
var hw = helloWorldGenerator();
let a = hw.next();
let b = hw.next();
let c = hw.next();
console.log(a,b,c,d)


function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

// var a = foo(5);
// a.next() // Object{value:6, done:false}
// a.next() // Object{value:NaN, done:false}
// a.next() // Object{value:NaN, done:true}


// //通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值
// var b = foo(5);
// b.next() // { value:6, done:false }
// b.next(12) // { value:8, done:false }
// b.next(13) // { value:42, done:true }


