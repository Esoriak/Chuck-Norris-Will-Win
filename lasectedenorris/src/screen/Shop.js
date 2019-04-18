import React, { Component } from 'react';

import '../components/buttonShopHover.css'
import './Shop.css'
// import '../Style.css'


import products from '../components/products.json'

import Button from '../components/ButtonShop';
import ProductContents from '../components/ProductContents';
import ImageShop from '../components/ImageShop';
import Button_Chuck_Top from '../components/Button_Chuck_Top';




class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonHover: products[0],
            buttonHover2: products[1],
            buttonHover3: products[2],
            buttonHover4: products[3],
            buttonHover5: products[4],
            buttonHover6: products[5],
            products: products[0]
        }
    }
    

    changeProduct = () => {
        this.setState({ products: products[0] })
    }
    changeProduct2 = () => {
        this.setState({ products: products[1] })
    }
    changeProduct3 = () => {
        this.setState({ products: products[2] })
    }
    changeProduct4 = () => {
        this.setState({ products: products[3] })
    }
    changeProduct5 = () => {
        this.setState({ products: products[4] })
    }
    changeProduct6 = () => {
        this.setState({ products: products[5] })
    }




    render() {

        return (
            <>
            <div className="contenair-global">
            <div className="contenair-buttons-product">
            
                <Button article={this.state.buttonHover} handleChangeProduct={this.changeProduct}/>
                <Button article={this.state.buttonHover2} handleChangeProduct={this.changeProduct2}/>
                <Button article={this.state.buttonHover3} handleChangeProduct={this.changeProduct3}/>
                </div>
                <div className="contenair-buttons-product2">
                <Button article={this.state.buttonHover4} handleChangeProduct={this.changeProduct4}/>
                <Button article={this.state.buttonHover5} handleChangeProduct={this.changeProduct5}/>
                <Button article={this.state.buttonHover6} handleChangeProduct={this.changeProduct6}/>
                </div>

                <ImageShop article={this.state.products}/>


                <ProductContents article={this.state.products}/>

                <Button_Chuck_Top />
            </div>
            </>
        )
    }
}

export default Shop