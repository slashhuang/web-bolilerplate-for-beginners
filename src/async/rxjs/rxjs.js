/*
 * 异步编程 番外讲解
 * built by slashhuang
 * 17/5/10
 * rxjs
 * realtime[即时通讯 im] + continuency[持续性 stock]
 */
debugger
import { log } from './logOperator';
import { Observable } from 'rxjs/Rx';
// Observable.prototype.log = log;
const observer ={
	next: (val) => {
		console.log(val);
		// if (this.unsubscribe) {
		// 	this.unsubscribe();
		// }
	},
	complete:()=>console.log('complete'),
	error:console.log
}
// observable == push notifications ==> observer
const o_1 = Observable.create(observer=>{
	observer.next(1);
});
o_1.map((val) => val).subscribe(observer)


// simple observable
const o_2 = Observable.of([1,2,3,4]);
o_2.subscribe(observer)

// pub/sub observer观察者模式
// const o_3 = Observable.interval(1000).map(val=>val*2)
// o_3.subscribe(observer)







