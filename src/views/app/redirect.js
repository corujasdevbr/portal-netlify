import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class RedirectPage extends Component {
    render() {
        const group = localStorage.getItem('userGroup')
        let pathname = '/app/dashboards'
        if (group === 'writer') {
            pathname = '/app/dashboards'
        } else if (group === 'editor') {
            pathname = '/app/editor-dashboards'
        } else if (group === 'client') {
            pathname = '/app/business-dashboards'
        }

        return (
            <Redirect
                to={{
                    pathname: pathname,
                }}
            />
        )
    }
}

export default RedirectPage
