/*
 * @Author slashhuang
 * 17/4/16
 * redux中的compose用于形成链式中间件
 */

import { compose } from 'redux';

//举例子
let fn = (name)=>{
	console.log(name);
	return name+'fn';
};
let fn1 = (name)=>{
	console.log(name);
	return name+'f1'
};
let fn2 = (name)=>{
	console.log(name);
	return name+'fn2'
};

//采用reduceRight，因此fn2先执行 
//compose(f, g, h) ===>  f(g(h(...args)))
let result = compose(fn,fn1,fn2)('start--');
//打印4
console.log(result);
