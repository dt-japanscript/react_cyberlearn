import React, { Component } from 'react'

export default class StateDemo extends Component {
    state = {
        status: false,
    }

    loginEvent = () => {
        let newState = {
            status: true,
        }

        this.setState(newState, () => {
            console.log('here', this.state.status)
        })
    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <p> Login Successfully </p>
        } else {
            return <button onClick={this.loginEvent}>Login</button>
        }
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        )
    }
}
