import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()

    console.log("ID: ", id)

    // https://dummyjson.com/products/{id}
    
    return (
        <div>ProductDetail</div>
    )
}

export default ProductDetail