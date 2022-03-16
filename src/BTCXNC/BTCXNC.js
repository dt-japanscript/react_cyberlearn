import React, { Component } from 'react'
import arrayFeatures from '../Data/arrayFeatures.json'
import wheels from '../Data/wheels.json';

export default class BTCXNC extends Component {

    state = {
        currentFeature: {
            id: 1,
            title: "Crystal Black",
            type: "Pearl",
            img: "./images/icons/icon-black.jpg",
            srcImg: "images-black/images-black-1/",
            color: "Black",
            price: "19,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
            wheels: [
                {
                    idWheel: 1,
                    srcImg: "images-black/images-black-1/"
                },
                {
                    idWheel: 2,
                    srcImg: "images-black/images-black-2/"
                },
                {
                    idWheel: 3,
                    srcImg: "images-black/images-black-3/"
                }
            ]
        },
        currentWheel: {
            idWheel: 1,
            img: "./images/icons/icon-wheel-1.jpg",
            title: "18-inch Alloy Wheels",
            price: "1,600"
        }

    }

    renderExteriorColor = () => {
        return arrayFeatures.map((arrayFeature, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <div className='row' style={{ cursor: 'pointer' }} onClick={() => { this.changeExterior(arrayFeature) }}>
                        <div className='col-2 px-0'>
                            <img style={{ width: '50px', }} src={arrayFeature.img} alt='' />
                        </div>
                        <div className='col-10'>
                            <div className=''>
                                <span className='font-weight-bold'>{arrayFeature.title}</span>
                                <br />
                                <span>{arrayFeature.type}</span></div>
                        </div>
                    </div>
                </li>
            )
        })
    }

    changeExterior = (newFeature) => {
        this.setState({
            currentFeature: newFeature
        })

    }

    renderWheel = () => {
        return wheels.map((wheelItem, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <div className='row' style={{ cursor: 'pointer' }} onClick={() => { this.changeWheel(wheelItem) }}>
                        <div className='col-2 px-0'>
                            <img style={{ width: '50px', }} src={wheelItem.img} alt='' />
                        </div>
                        <div className='col-10'>
                            <div className=''>
                                <span className='font-weight-bold'>{wheelItem.title}</span>
                                <br />
                                <span>{wheelItem.price}</span></div>
                        </div>
                    </div>
                </li>
            )
        })
    }

    changeWheel = (newWheel) => {
        this.setState({
            currentWheel: newWheel
        })
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-9'>
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={`./images/${this.state.currentFeature.srcImg}civic-1.jpg`} alt='' />
                        </div>

                        <div className='col-3'>
                            <div id="myAccordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Exterior Color
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#myAccordion">
                                        <div className="card-body">

                                            <div className="card" >
                                                <ul className="list-group list-group-flush">
                                                    {this.renderExteriorColor()}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Wheels
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#myAccordion">
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                {this.renderWheel()}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
