import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const Produt = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock,key } = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""></img>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in-Order now</p>
                {props.showAddToCart === true && <button className="main-button" 
                onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />
                 Add to cart
                </button>}
            </div>

        </div>
    );
};

export default Produt;