/* 
应用主界面路由组件
*/
import React, { Component } from 'react'
import Cookies from 'js-cookie' // 可以操作前端cookie的对象 set()/get()/remove()
import {Switch, Route} from 'react-router-dom'

import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'

export default class Main extends Component {
  render() {
    // 如果浏览器中没有保存userid的cookie，直接跳转到login
    const userid = Cookies.get('userid')
    if (!userid) {
      return this.props.history.replace('/login')
    }
    return (
      <div>
        <h2>Main</h2>
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo} />
          <Route path='/dasheninfo' component={DashenInfo} />
        </Switch>
      </div>
    )
  }
}
