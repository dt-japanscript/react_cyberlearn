import React, { Component } from 'react'

export default class RenderingConditions extends Component {

    login = true;
    username = 'TestName';

    renderContent = () => {
        if (this.login) {
            return <p>Hello {this.username}</p>
        }
        return <button>Login</button>
    }

    render() {
        return (
            this.renderContent()
        )
    }
}
