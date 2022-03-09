import React, { Component } from 'react';
import Child from './Child';
import style from './Styling.module.css';
import './Styling.css';

export default class Styling extends Component {
    render() {
        return (
            <div>
                <p className={style.txtStyle}>Styling text</p>
                Styling
                <Child />
            </div>
        )
    }
}
