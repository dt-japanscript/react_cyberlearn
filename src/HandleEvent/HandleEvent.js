import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // Dinh nghia ham xu ly su kien
    handleClick = () => {
        alert('hello')
    }

    showMessage = (message) => {
        // console.log(tagButton.target)
        alert(message)
    }

    reply = (content) => {
        alert(content);
    }

    render() {
        return (
            <div>
                <button id='btnClickMe' onClick={
                    this.handleClick
                }>Click Here</button>

                <button id='btnShowMsg' onClick={
                    this.showMessage.bind(this, 'Show Msg')
                }>btnShowMsg</button>

                <button id='btnReplyMsg' onClick={() => {
                    this.reply('Reply');
                }}>btnReplyMsg</button>
            </div>
        )
    }
}
