import React from 'react';
import './Product.css'

const Produt = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""></img>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in-Order now</p>
                <button className="main-button" 
                onClick={()=>props.handleAddProduct(props.product)}> 
                 add to cart
                </button>
            </div>

        </div>
    );
};

export default Produt;