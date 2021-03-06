/* 
包含n个工具函数的模块
*/

/* 
注册laoban--> /laobaninfo
注册大神--> /dasheninfo
登录laoban--> /laobaninfo或者 /laoban
登录大神--> /dasheninfo 或者 /dashen
*/
export const getRedirectPath = (type, header) => {
  let path = ''
  // 根据type得到path
  path += type === 'laoban' ? '/laoban' : '/dashen'
  // 如果没有头像添加info
  if (!header) {
    path += 'info'
  }
  return path
}