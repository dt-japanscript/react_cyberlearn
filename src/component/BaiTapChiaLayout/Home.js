import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'

export default class Home extends Component {
    render() {
        let style = {
            margin: 0,
            padding: 0
        }

        return (
            <div className='container-fluid' >
                <div className="row">
                    <div className='col-12' style={style}>
                        <HeaderDemo />
                    </div>
                </div>
                <div className="row">
                    <div className='col-4' style={style}>
                        <Navigation />
                    </div>
                    <div className='col-8' style={style}>
                        <Content />
                    </div>
                </div>
                <div className="row">
                    <div className='col-12' style={style}>
                        <Footer />
                    </div>
                </div>
            </div >
        )
    }
}
