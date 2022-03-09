import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <div className='bg-secondary text-center'>
                    <br />
                    500x325
                    <br />
                    <br />

                </div>
                <div className='bg-white text-black text-center'>
                    <h5>Card title</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, corrupti?
                    </p>
                </div>
                <div className='bg-light text-center'>
                    <button className='btn btn-primary'>Find out More!</button>
                </div>
            </div>
        )
    }
}
