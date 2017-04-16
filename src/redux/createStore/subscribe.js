/*
 * @Author slashhuang
 * 17/4/16
 * 调用store的api接口
 */
import store  from './createStore';
/*
 * store的数据结构
 * {
    dispatch,  ==== 
    subscribe, 
    getState,  ====
    replaceReducer,
    [$$observable]: observable
  }
 */
//redux数据流 action ==> reducer ==> nextState
let counter=0;
let listener1 = ()=>{
	console.log(`counter=${++counter}--- listener1 called`)
};
let listener2 = ()=>{
	console.log(`counter=${++counter}--- listener2 called`)
};
let domListener = ()=>{
	document.body.innerHTML += JSON.stringify(store.getState())
};

store.subscribe(listener1) //===> arr.push(listener1) arr.forEach(fn=>fn())
store.subscribe(listener2) //===> arr.push(listener2)
store.subscribe(domListener)





