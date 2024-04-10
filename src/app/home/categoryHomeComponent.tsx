import { ICategory } from '@/shared/layout/header/dataFake'
import React from 'react'

function CategoryHomeComponent(props: { data: ICategory }) {
    const { data: dataCate } = props;
    return (
        <section className='pb-16'>
            <div className='border-2 border-white border-b-gray-500 pb-4 mb-5'>
                <h1 className='uppercase text-[24px] font-bold'>{dataCate.name}</h1>
            </div>
            <div className='w-100'>
                <div className='w-[25%]'>
                    <img className='w-full h-auto' src={dataCate.thumbnail} alt="img-category" />
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default CategoryHomeComponent