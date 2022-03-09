import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgProduct: require('../assets/products/black-car.jpg'),
    }

    renderCar = (imgNewProduct) => {
        let newState = {
            imgNewProduct: imgNewProduct,
        };

        console.log('newState : ', newState)
        this.setState(newState);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-7'>
                        <img style={{ width: "100%" }} src={this.state.imgProduct} alt='' />
                    </div>

                    <div className='col-5'>
                        <div className="card text-dark">
                            <div className='card-header text-primary'>Exterior Color</div>
                            <div className="card-body">

                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { this.renderCar(require('../assets/products/black-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-black.jpg')} alt='' />
                                    <div className='col-10 '>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { this.renderCar(require('../assets/products/steel-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-steel.jpg')} alt='' />
                                    <div className='col-10 '>
                                        <h3>Modern Steel</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { this.renderCar(require('../assets/products/silver-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-silver.jpg')} alt='' />
                                    <div className='col-10 '>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border border-link pt-2 pb-2 mt-2' onClick={() => { this.renderCar(require('../assets/products/red-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-red.jpg')} alt='' />
                                    <div className='col-10 '>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
