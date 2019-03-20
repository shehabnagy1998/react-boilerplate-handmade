import React, { Component } from 'react'
import img from './assets/pic.jpg'
import './App.scss'

export default class App extends Component {

    state = {
        msg: 'Hello from state'
    };

    render() {
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>{this.state.msg}</h2>
                <img src={img} />
            </div>
        )
    }
}
