import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const ProductCategoryListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery")
            .catch((error) => {
                console.log("error is ", error);
            })
        dispatch(setProducts(response.data))
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductCategoryListing
