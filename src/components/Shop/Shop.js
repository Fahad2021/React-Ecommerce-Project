import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Produt from '../Product/Produt';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const[prod,setProd]=useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        console.log('product added',product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
            
                {
                    prod.map(pd=><Produt 
                        handleAddProduct={handleAddProduct}
                        product={pd}></Produt>)
                }
        
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;