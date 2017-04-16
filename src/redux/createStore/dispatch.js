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
let counter = 0;
document.addEventListener('click',()=>{
	counter++;
	store.dispatch({type:counter%2==0?'first':"second"});
})
store.dispatch({type:'second'});
console.log(store.getState())