import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css';
import dataFeature from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';

export default class BaiTapChonXeNangCao extends Component {

    state = {
        carCurrent: {
            id: 4,
            title: "Rallye Red",
            type: "Metallic",
            img: "./images/icons/icon-red.jpg",
            srcImg: "images-red/images-red-1/",
            color: "Red",
            price: "22,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
            wheels: [
                {
                    idWheel: 1,
                    srcImg: "images-red/images-red-1/"
                },
                {
                    idWheel: 2,
                    srcImg: "images-red/images-red-2/"
                },
                {
                    idWheel: 3,
                    srcImg: "images-red/images-red-3/"
                }
            ]
        }
    }

    changeCar = (newCar) => {
        this.setState({
            carCurrent: newCar
        })
    }

    renderIcon = () => {
        return dataFeature.map((item, index) => {
            return (
                <div style={{ cursor: 'pointer' }} className='row mt-1 border border-color-default m3' key={index} onClick={() => { this.changeCar(item) }}>
                    <div className='col-2'>
                        <img className='' style={{ width: '100%' }} src={item.img} alt='' />
                    </div>
                    <div className='col-10'>
                        <h3 className='p-3'>{item.title}</h3>
                        <span className='p-3 pt-0 mt-0'>{item.type}</span>
                    </div>
                </div>
            )
        })
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return (
                <div className='row mt-1 border border-color-default m3' key={index}>
                    <div className='col-2'>
                        <img className='' style={{ width: '100%' }} src={item.img} alt='' />
                    </div>
                    <div className='col-10 d-flex flex-column align-items-center'>
                        <span className='p-3 mt-5'>{item.title}</span>
                    </div>
                </div>
            )
        })
    }

    componentDidMount = () => {
        // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js"></script>
        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js'
        document.querySelector('#appendScript').appendChild(tagScript);
    }

    componentDidUpdate = () => {
        document.querySelector('#carCurrent').innerHTML = '';
        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';
        document.querySelector('#appendScript').innerHTML = "";
        document.querySelector('#appendScript').appendChild(tagScript);
    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='model'>
                            {/* <img style={{ width: '100%' }} src='./images/images-black/images-black-1/civic-1.jpg' alt='' /> */}
                            <div id="carCurrent" className='cloudimage-360' data-folder={"./images/" + this.state.carCurrent.srcImg} data-filename-x="civic-{index}.jpg"
                                data-amount-x="8"
                                style={{ minWidth: '100%' }}>
                            </div>
                        </div>
                        <div id='appendScript'></div>
                        <div className="card mt-2">
                            <h5 className='card-header'>Exterior color</h5>
                            <table className="table border border-color-light">
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>Black</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ 19.000,00</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>In-line-4-cylinder</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='col-6'>
                        <div className="card text-left">
                            <h5 className='card-header'>Exterior Color</h5>
                            <div className='container-fluid'>
                                {this.renderIcon()}
                            </div>

                        </div>

                        <div className="card text-left mt-1">
                            <h5 className='card-header'>Wheels</h5>
                            <div className='container-fluid'>
                                {this.renderWheels()}
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        )
    }
}
