import './footer.scss';
import React from 'react'

export interface IFooterProps {
    isAdmin: boolean
}
function Footer(props: IFooterProps) {
    return (
        <div className='text-black text-center '>
            {
                props.isAdmin ?
                    <div> Footer Admin</div> :
                    <div> Footer default</div>

            }
        </div>
    )
}

export default Footer