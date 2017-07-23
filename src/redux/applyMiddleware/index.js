/*
 * @Author slashhuang
 * 17/4/16
 * redux中的applyMiddleware中间件
 */
import { createStore,applyMiddleware } from 'redux';
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

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const c =  funcs.reduce((a, b) => {
    return (...args) => {
      debugger;
      return a(b(...args))
    }
  })
  return c
}
const logger =  store => next => action => {
	console.log('logger1'+action)
	next(action)
};
const thunkMiddleware= store => next => action => {
		console.log('thunk',action)
    return next(action);
};
const enhancer = compose(
  applyMiddleware(logger,thunkMiddleware),
  batchedSubscribe((notify) => {
    notify();
  })
)
console.log(enhancer.toString())
const reducer = (state, action) => state;
debugger;
const store = createStore(reducer, {}, enhancer);
debugger;
store.dispatch({type:1})


