
// let a =1,
// 	b =2,
// 	c =3;

// 基本用法 

let [a, b, c] = [1, 2, 3];

let { d,e }={ d:1,e:2 }

//深度解构
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;

//应用
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3


//字符串的解构赋值 
const [a1, b1, c1, d1, e1] = 'hello';

//rest解构

const { p,...rest } = {p:1,a:2,c:2}

// 默认值 ,如果一个数组成员不严格等于undefined

// let [q = true] = [];


//对象的解构赋值 
// let { foo, bar } = { foo: "aaa", bar: "bbb" };




// console.log(x,y)



// //函数参数的解构赋值





