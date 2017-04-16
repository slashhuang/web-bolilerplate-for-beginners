/*
 * @Author slashhuang
 * 17/4/16
 * redux中的applyMiddleware中间件
 */
import { createStore,applyMiddleware } from 'redux';
//中间件
const logger = store => next => action => {
	console.log('logger1'+action);
	next(action)
};
const logger1 = store => next => action => {
	setTimeout(next,1000,action)
};
const thunkMiddleware= store => next => action => {
		console.log(action)
        let {dispatch,getState}=store;
        if (typeof action == 'function') {
                return action(dispatch, getState);
         }
        return next(action);
};
let reducer = (preState={},action)=>{
	debugger;
 	return Object.assign(preState,action)
}
let store = createStore(reducer,applyMiddleware(logger,logger1,thunkMiddleware));
store.subscribe(()=>{
	document.body.innerHTML += JSON.stringify(store.getState())
})
document.addEventListener('click',()=>{
	store.dispatch({type:"学习bindActionCreators"})
})


