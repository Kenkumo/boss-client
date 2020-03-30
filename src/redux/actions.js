/* 
包含所有action creator函数的模块
*/

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from './action-types'

import {
  reqRegister,
  reqLogin,
  reqUpdateUser
} from '../api'

// 同步错误消息
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
// 同步成功相应
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
// 同步接收用户
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// 同步重置用户
const reset_user = (msg) => ({type: RESET_USER, data: msg})
/* 
注册异步action
*/
export const register = ({ username, password, password2, type }) => {
  // 进行前台表单验证，如果不合法，返回一个同步action对象，显示提示信息
  if (!username || !password || !type) {
    return errorMsg('用户名必须输入')
  }
  if (password !== password2) {
    return errorMsg('两次输入密码不一致~~~')
  }
  return async dispatch => {
    // 异步ajax请求，得到相应
    const response = await reqRegister({ username, password, type })
    // 得到响应体数据
    const result = response.data
    if (result.code === 0) {
      // 成功
      // 分发授权成功的同步action
      dispatch(authSuccess(result.data))
    } else {
      // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

/* 
登录异步action
*/
export const login = ({ username, password }) => {
  if (!username || !password) {
    return errorMsg('用户名密码必须输入')
  }

  return async dispatch => {
    // 发送登录的异步ajax请求
    /* 
      const promise = reqLogin(user)
      promist.then(response => {
        const result = response.data // {code: 0/1, data: user, msg: ''}
      })
    */
    const response = await reqLogin({ username, password })
    const result = response.data
    if (result.code === 0) {
      //  成功
      // 分发授权成功的同步action
      dispatch(authSuccess(result.data))
    } else {
      //  失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

/* 
异步更新用户
*/
export const updateUser = (user) => {
  return async dispatch => {
    // 发送异步ajax请求
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(reset_user(result.msg))
    }
  }
}