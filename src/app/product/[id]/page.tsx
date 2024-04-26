import React from 'react'

function ProductDetailPage({ params }: { params: { id: string } }) {
    return <div>My Post: {params.id}</div>
}

export default ProductDetailPage