


// 基本用法 

// let [a, b, c] = [1, 2, 3];

// 默认值 ,如果一个数组成员不严格等于undefined

let [q = true] = [];


//对象的解构赋值 
let { foo, bar } = { foo: "aaa", bar: "bbb" };


let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;

console.log(x,y)

//字符串的解构赋值 
const [a, b, c, d, e] = 'hello';

//函数参数的解构赋值
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3




