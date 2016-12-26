/**
 * Created by slashhuang on 16/3/8.
 */



/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */

/**
 * middleware
 * dispatch
 * =>function(){}
 * =>
 */

const logger = store => next => action => {

        let result = next(action)

        return result
};
const logger1 = store => next => action => {
        let result = next(action)
        console.dir(result);
        return result
};
const thunkMiddleware= store => next => action => {
        let {dispatch,getState}=store;
                        if (typeof action == 'function') {
                                return action(dispatch, getState);
                        }

                        return next(action);
                };

/**
 * 引入改写过的store
 */

import todoApp from './reducers';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters,thunkTest } from './actions';
/**
 * 所有接口放在src/index.js
 */
import { createStore, combineReducers, applyMiddleware } from '../src/index.js'

let createStoreWithMiddleware = applyMiddleware(logger,logger1,thunkMiddleware)(createStore(todoApp))
let store = createStoreWithMiddleware;

/**
 * 监听 state 更新时，打印日志
 *
 * 注意 subscribe() 返回一个函数用来注销监听器
 */
let unsubscribe = store.subscribe(() =>
        document.body.innerHTML  += JSON.stringify(store.getState())
);
let unsubscribe1 = store.subscribe(() =>
        document.body.innerHTML  += 'subscribing'
);

/**
 * 发起一系列 action
 */
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(thunkTest({type:'thunk',text:'thunk'}));
//unsubscribe1();
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();
