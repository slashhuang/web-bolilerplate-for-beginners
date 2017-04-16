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
store.dispatch({type:'first'});
console.log(store.getState())
store.dispatch({type:'second'});
console.log(store.getState())