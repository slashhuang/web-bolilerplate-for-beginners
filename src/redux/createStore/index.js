/*
 * @Author slashhuang
 * 17/4/16
 * redux中的createStore是最核心的api
 * createStore入口
 */

/* 用法
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
 require('./createStore')
 require('./subscribe')
 require('./dispatch')
