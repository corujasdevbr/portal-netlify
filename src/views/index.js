import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Main extends Component {
    render() {
        const { loginUser } = this.props
        return loginUser ? (
            <Redirect
                to={{
                    pathname: '/app'
                }}
            />
        ) : (
            <Redirect
                to={{
                    pathname: '/user/login'
                }}
            />
        )
    }
}
export default Main
