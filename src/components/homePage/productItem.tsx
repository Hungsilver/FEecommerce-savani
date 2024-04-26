import { IProduct } from '@/shared/layout/header/dataFake';
import React from 'react'

function ProductItem(props: { product: IProduct }) {
    const { product: productItem } = props;
    return (
        <div className='flex flex-col gap-3 p-3 border-2 rounded-md border-gray-200'>
            <a href={'product/' + productItem.id} className='w-full h-auto relative'>
                <img className='w-full h-full rounded-md' src={productItem.image} alt="img-product" />
                <div className='bg-red-500 rounded-full w-[40px] h-[40px] absolute left-[-5px] top-[-5px] flex justify-center items-center text-[12px] text-white'>-40%</div>
            </a>
            <div>
                <a className='font-semibold' href={'product/' + productItem.id}>{productItem.name}</a>
                <div className=''>
                    <span className='mr-5 font-bold text-red-400'>91012đ</span>
                    <del className=''>20000đ</del>
                </div>
            </div>
        </div>
    )
}

export default ProductItem