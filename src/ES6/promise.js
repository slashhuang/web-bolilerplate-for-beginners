


let p = new Promise((resolve,reject)=>{
	setTimeout(resolve,100,1)
})


// p ==> fulfilled 1
// Promise的状态 fulfilled pending rejected
// Promise的值  

let p1 = p.then(val=>{
	val += 2;
	return 2
});

setTimeout(console.log,100,p1)
