/* 
使用axios封装的ajax请求函数
函数返回的是promise对象
*/

import axios from 'axios'

export default function ajax(url='', data={}, type='GET') {
  if (type === 'GET') {
    // 准备url query请求参数
    let paramStr = ''
    // Object.keys() 获取key组成的数组
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if (paramStr !== '') {
      // paramStr = paramStr.substr(0, paramStr.length - 1)
      paramStr = paramStr.substring(0, paramStr.lastIndexOf('&'))
      url = url + '?' + paramStr
    }
    // 发送get请求
    return axios.get(url)
  } else {
    // 发送post请求
    return axios.post(url, data) // data: 包含请求体数据的对象
  }
}