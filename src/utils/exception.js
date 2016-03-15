/**
 * Created by slashhuang on 16/3/15.
 */
/**
 * 异常处理，阅读前可以先跳过
 * @param key
 * @param action
 * @return {*}
 */
export function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type
    var actionName = actionType && `"${actionType.toString()}"` || 'an action'

    return (
        `Reducer "${key}" returned undefined handling ${actionName}. ` +
        `To ignore an action, you must explicitly return the previous state.`
    )
}

export function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
    var reducerKeys = Object.keys(reducers)
    var argumentName = action && action.type === ActionTypes.INIT ?
        'initialState argument passed to createStore' :
        'previous state received by the reducer'

    if (reducerKeys.length === 0) {
        return (
            'Store does not have a valid reducer. Make sure the argument passed ' +
            'to combineReducers is an object whose values are reducers.'
        )
    }

    if (!isPlainObject(inputState)) {
        return (
            `The ${argumentName} has unexpected type of "` +
            ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
            `". Expected argument to be an object with the following ` +
            `keys: "${reducerKeys.join('", "')}"`
        )
    }

    var unexpectedKeys = Object.keys(inputState).filter(key => !reducers.hasOwnProperty(key))

    if (unexpectedKeys.length > 0) {
        return (
            `Unexpected ${unexpectedKeys.length > 1 ? 'keys' : 'key'} ` +
            `"${unexpectedKeys.join('", "')}" found in ${argumentName}. ` +
            `Expected to find one of the known reducer keys instead: ` +
            `"${reducerKeys.join('", "')}". Unexpected keys will be ignored.`
        )
    }
}

export function assertReducerSanity(reducers) {
    Object.keys(reducers).forEach(key => {
        var reducer = reducers[key]
        var initialState = reducer(undefined, { type: ActionTypes.INIT })

        if (typeof initialState === 'undefined') {
            throw new Error(
                `Reducer "${key}" returned undefined during initialization. ` +
                `If the state passed to the reducer is undefined, you must ` +
                `explicitly return the initial state. The initial state may ` +
                `not be undefined.`
            )
        }

        var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.')
        if (typeof reducer(undefined, { type }) === 'undefined') {
            throw new Error(
                `Reducer "${key}" returned undefined when probed with a random type. ` +
                `Don't try to handle ${ActionTypes.INIT} or other actions in "redux/*" ` +
                `namespace. They are considered private. Instead, you must return the ` +
                `current state for any unknown actions, unless it is undefined, ` +
                `in which case you must return the initial state, regardless of the ` +
                `action type. The initial state may not be undefined.`
            )
        }
    })
}