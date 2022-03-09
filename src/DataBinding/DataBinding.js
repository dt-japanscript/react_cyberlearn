import React, { Component } from 'react'

export default class DataBinding extends Component {

    // Tao 1 thuoc tinh
    name1 = 'MyName';

    // Thuoc tinh object
    student = {
        name: 'TenHocVien',
        age: '20',
    }

    // Binding phuong thuc 
    renderImage = () => {

        return <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='' />
    }


    render() {


        return (
            <div>
                <h1>Binding object</h1>

                <h3>nice to meet {this.student.name} - {this.student.age}</h3>

                <h3>Binding function</h3>
                {this.renderImage()}



            </div>
        )
    }
}
