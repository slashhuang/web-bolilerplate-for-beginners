/**
 * Created by slashhuang on 16/3/8.
 */

import isPlainObject from 'lodash/isPlainObject'
//dispatch初始化的接口
export var ActionTypes = {
    INIT: '@@redux/INIT'
}
export default function createStore(reducer, initialState, enhancer) {
    /**
     * 参数类型检测
     */
    if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
        enhancer = initialState
        initialState = undefined
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }

        return enhancer(createStore)(reducer, initialState)
    }
    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.')
    }
    /**
     * 初始化数据
     */
    var currentReducer = reducer
    var currentState = initialState
    var currentListeners = []
    var nextListeners = currentListeners
    var isDispatching = false;
    /**
     * 创建复制的新数组
     */
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice()
        }
    }

    /**
     * 获取当前状态
     */
    function getState() {
        return currentState
    }

    /**
     * 每次dispatch都会执行state的观察者
     * 将观察者添加进nextListeners数组
     * 返回unsubscribe函数取消监听(很好的设计思路!!!!)
     */
    function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.')
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners()
        nextListeners.push(listener);
        //返回接口,正好利用闭包可以保持对相应Listener的访问
        return function unsubscribe() {
            if (!isSubscribed) {
                return
            }
            isSubscribed = false
            ensureCanMutateNextListeners()
            var index = nextListeners.indexOf(listener)
            nextListeners.splice(index, 1)
        }
    }

    /**
     * 唯一改变state的接口
     * 生成nextState同时通知观察者
     *
     * return action这样设计比较好的一点是方便扩展中间件!!!
     *
     **
     */
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(
                'Actions must be plain objects. ' +
                'Use custom middleware for async actions.'
            )
        }
        if (typeof action.type === 'undefined') {
            throw new Error(
                'Actions may not have an undefined "type" property. ' +
                'Have you misspelled a constant?'
            )
        }

        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.')
        }
        /**
         * 将当前状态和action作为参数传值给reducer,生成下个状态
         */
        try {
            isDispatching = true
            currentState = currentReducer(currentState, action)
        } finally {
            isDispatching = false
        }

        var listeners = currentListeners = nextListeners
        for (var i = 0; i < listeners.length; i++) {
            /**
             *  遍历subscribe的观察者
             */
            listeners[i]()
        }
        return action
    }

    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error('Expected the nextReducer to be a function.')
        }

        currentReducer = nextReducer

        dispatch({ type: ActionTypes.INIT })
    }

    /**
     * 手动dispatch的接口
     */
    dispatch({ type: ActionTypes.INIT })
    /**
     * store的所有数据都必须采取setter和getter的方式获取
     */
    return {
        dispatch,
        subscribe,
        getState,
        replaceReducer//重新初始化reducers和store,重置store的接口
    }
}