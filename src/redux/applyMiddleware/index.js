/*
 * @Author slashhuang
 * 17/4/16
 * redux中的applyMiddleware中间件
 */
import { createStore,applyMiddleware,compose } from 'redux';
import { batchedSubscribe } from 'redux-batched-subscribe';

/*
 * 中间件 applyMiddleware
 * 参数
 * 	类数组的中间件对象
 * applyMiddleware(...middlewares)
 * 返回值
 *   return {
      ...store,
      dispatch
    }
 *
  koa框架或者cuty等的数据流模型
  request ===>  middleware ===> controller ===> response

  redux的数据流模型
  previouseState 
  	===> action ===> reducers ==>
  nextState	
	

  dispatch(action) ===> reducers

  === monkeyPatch ==
  let _dispatch = store.dispatch;
  let log = (action)=>{console.log(action)}
  dispatch = (action)=>{
	log(action); //打印日志
	_dispatch(action) ;//执行真正的逻辑
  }

  //日志中间件
  //devtool
  curry 化 ==> 
  	1. 多参函数转换成单参函数
  	2. 灵活化闭包
 */
const logger1 = store => next => action => {
  next(action)
  return 'logger1'
};
const logger2 = store => next => action => {
  next(action);
  return 'logger2'
};
const thunkMiddleware = store => {
  let chain = (next) => {
    return (action) => {
      next(action);
      return 'fuck';
    }
  }
  return chain;
}
debugger;
const enhancer = applyMiddleware(logger1, logger2, thunkMiddleware);
const reducer = (state, action) => state;
const store = createStore(reducer, {}, enhancer);
const s = store.dispatch({type:1});
console.log('return value gets---', s);


