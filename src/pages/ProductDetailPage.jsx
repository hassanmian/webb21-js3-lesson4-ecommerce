import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'

export default function ProductDetailPage() {
    let params = useParams()
    return (
        <div>
            <h2>Product Detail Page {params.id}</h2>
            <ProductDetail id={params.id} />
        </div>
    )
}
