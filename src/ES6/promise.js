let p = new Promise((resolve,reject)=>{
	setTimeout(resolve,3000,1)
})
let q = new Promise((resolve, reject) => {
	reject('not good time')
})
let pending = new Promise((resolve,reject)=>{
	
})

// p ==> fulfilled 1
// Promise的状态 fulfilled pending rejected
// Promise的值  

// 3s 后
let p1 = p.then(val=>{
	val += 2;
	return new Promise((res, rej) => {
		res(2)
	})
}).then((val) => {
	console.log(val);
});
