import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div className='bg-success text-white'>
                <h2>A Warm Welcome</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quisquam numquam deleniti repellendus sint id doloribus animi architecto ab ipsa?</p>
                <button className='btn btn-primary'>Call to Action!</button>
            </div>
        )
    }
}
