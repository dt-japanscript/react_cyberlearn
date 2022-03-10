import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import './BaiTapThuKinh.css';

export default class BaiTapThuKinh extends Component {

    state = {
        glassCurrent: {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((glassessItem, index) => {
            return <img className='ml-2 p-2 border-width-1' style={{ width: '100px', cursor: 'pointer' }} key={index} src={glassessItem.url} alt='' onClick={() => { this.changeGlasses(glassessItem) }} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassCurrent: newGlasses
        })

    }

    render() {

        const keyFrames = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
            }
            to {
                width: 150px;
                transform: rotate(0deg);
            }
        }

        .glassesStyle {
            width: 250px;
        }`


        let styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: .7,
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 1s`
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }

        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', minHeight: '2000px', backgroundSize: "2000px" }}>

                <style>
                    {keyFrames}
                </style>

                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
                    <h3 className='text-center text-light p-5' style={{ backgroundColor: 'rgba(148, 0, 211, .3)' }}>TRY GLASSES APP ONLINE</h3>

                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: '250px' }} src='./glassesImage/model.jpg' alt='' />
                                    <img
                                        style={styleGlasses} className='position-absolute glassesStyle' src={this.state.glassCurrent.url} alt='' />

                                    <div className='position-relative' style={infoGlasses}>
                                        <span className='font-weight-bold' style={{ fontWeight: '17px' }}>{this.state.glassCurrent.name}</span>
                                        <br />
                                        <span style={{ fontSize: '13px', fontWeight: '400px' }}>{this.state.glassCurrent.desc}</span>
                                    </div>

                                </div>

                            </div>
                            <div className='col-6'>
                                <img style={{ width: '250px' }} src='./glassesImage/model.jpg' alt='' />

                            </div>
                        </div>
                    </div>
                    {/* Div chua cac kinh duoc chon */}
                    <div className='bg-light container text-center mt-5 p-5 d-flex justify-content-center'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        )
    }
}
