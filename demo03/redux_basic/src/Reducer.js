import * as ActionTypes from './ActionTypes'

//根据action和state的获取新的state的纯函数。
export default (state, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        [action.counterCation]: state[action.counterCation] + 1
      }
    case ActionTypes.DECREMENT:
      return {
        ...state,
        [action.counterCation]: state[action.counterCation] -1
      }
    default:
      return state
  }
}