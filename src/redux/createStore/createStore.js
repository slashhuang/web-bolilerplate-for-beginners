/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * 创建store
 */
import { createStore } from 'redux';
/*
 * 参数
 * createStore(reducer, preloadedState, enhancer) 
 * 返回值
 * {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
 */
 let reducer = (preState,action)=>{
 	return Object.assign(preState,action)
 }
 let store = createStore(reducer,{a:1});

 console.log(store.getState());

 module.exports=store