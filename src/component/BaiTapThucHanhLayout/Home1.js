import React, { Component } from 'react'
import Footer1 from './Footer1'
import Header1 from './Header1'
import Item from './Item'
import Welcome from './Welcome'

export default class Home1 extends Component {
    render() {
        let style = {
            margin: 0,
            padding: 0,
        }

        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12' style={style}>
                            <Header1 />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12' style={style}>
                            <Welcome />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 d-flex' style={style}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12' style={style}>
                            <Footer1 />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
