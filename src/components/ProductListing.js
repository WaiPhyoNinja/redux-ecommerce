import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { setProducts } from '../redux/actions/productsActions'
const ProductListing = () => {

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
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

export default ProductListing
