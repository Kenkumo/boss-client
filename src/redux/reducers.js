/* 
包含多个用于生成新的state的reducer函数的模块
*/
import { combineReducers } from 'redux'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from './action-types';

import { getRedirectPath } from '../utils/index'
const initUser = {
  username: '', // 用户名
  type: '', // 用户类型dashen/laoban
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动跳转的路由path
}

// 产生user状态的reducer
function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const redirectTo = getRedirectPath(action.data.type, action.data.header)
      return { ...action.data, redirectTo }
    case ERROR_MSG:
      return { ...state, msg: action.data }
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return { ...initUser, msg: action.data }
    default:
      return state
  }
}

// 向外暴露的状态的结构：{user: {}}
export default combineReducers({
  user
})
