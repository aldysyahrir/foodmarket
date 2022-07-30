import React from 'react'

const PaymentTab = ({ tittle, items }) => {
    return (
        <div className='px-6 mb-6 py-2 bg-white'>
            <p className='text-xs font-normal py-2'>{tittle}</p>
            {items.length > 0 &&
                items.map((item) => (
                    <div className='flex flex-row justify-between my-1'>
                        <p className='text-sm font-normal text-gray-400'>{item.tittle}</p>
                        <p className={`text-sm font-normal ${item.isGreen ? "text-green-300" : ""}`}>{item.value}</p>
                    </div>
                ))}
        </div>
    )
}

export default PaymentTab