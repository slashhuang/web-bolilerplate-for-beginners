/**
 * Created by slashhuang on 17/2/19.
 */

const world = "world";
//类 ==> prototype constructor
class Test {
	constructor(){
		this.a = 'a'
	}
    hello(){
        return `hello ${this.a}`//模板字符串
    }
}


// ES6默认为严格模式，。
// 前端环境箭头函数babel转码的时候，this指向上级

let test1 = function(){
    console.log(this);
    return ()=>{
        console.log(this)
    }
};
//打印{a:1}
test1.apply({a:1})()








// alert(new Test().hello())