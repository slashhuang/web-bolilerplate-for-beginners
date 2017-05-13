/*
 * built by slashhuang
 * 17/5/11
 * 基础的microtask和macrotask
 */
 process.nextTick(()=>console.log('tick0'))
 setTimeout(console.log,0,'0秒')
 process.nextTick(()=>console.log('tick1'))
 setTimeout(console.log,1,'1秒')
 setTimeout(console.log,2,'2秒')

 // ========> [同步代码] pop()[microtask] [macrotask]