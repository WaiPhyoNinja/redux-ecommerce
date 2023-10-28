import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';
import { useParams } from 'react-router-dom';

const ProductCategoryListing = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            dispatch(setProducts(response.data));
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [category]);

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductCategoryListing
