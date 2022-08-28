import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Produt from '../Product/Produt';


const ProductDetail = () => {
    const {productKey}=useParams();
    const product= fakeData.find(pd=>pd.key===productKey);
    console.log(product);
    return (
        <div>
            <h1>Product Detail</h1>
            <Produt showAddToCart={false} product={product}></Produt>
        </div>
    );
};

export default ProductDetail;