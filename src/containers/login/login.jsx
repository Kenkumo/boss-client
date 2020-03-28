// 用户注册的路由组件
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  login = () => {
    console.log('Login', this.state)
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  toRegister = () => {
    this.props.history.replace('/register')
  }
  render() {
    return (
      <div>
        <NavBar>BOSS直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem
              placeholder='输入用户名'
              onChange={val => this.handleChange('username', val)}
            >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type='password'
              placeholder='输入密码'
              onChange={val => this.handleChange('password', val)}
            >
              密&nbsp;&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <Button type='primary' onClick={this.login}>
              登&nbsp;&nbsp;&nbsp;&nbsp;录
            </Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>注册账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
