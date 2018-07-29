import React, { Component } from 'react'
// import Div from '../atoms/div/index'
import styled from 'styled-components'
import Buttom from '../atoms/button'

export default class App extends Component {
  render() {
    return (
      <div>
        <Buttom>Button</Buttom>
        <Buttom type={'warning'} round>Button</Buttom>
      </div>
    )
  }
}