import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productsAction-creator'
import ProductComponent from './ProductComponent'


const ProductsListing = () => {
    // const products = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(r => dispatch(setProducts(r.data)))
            .catch(err => console.log("Error", err))
    }, [dispatch])

    // console.log('Products: ', products)

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductsListing
