import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ILFood1 } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessOrder = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col flex-1 justify-center items-center bg-gray-100'>
            <div className='max-w-xs px-4'>
                <img src={ILFood1} />
                <Gap height={30} />
                <p className='text-xl font-normal text-center'>You've Made Order</p>
                <Gap height={30} />

                <p className='text-sm font-light text-gray-400 text-center'>
                    Just stay at home while we are
                    preparing your best foods</p>
                <Gap height={30} />
                <Button
                    onClick={() => navigate("/home")}
                    label="Order Other Foods" />
                <Gap height={30} />
                <Button
                    onClick={() => navigate("/order-in-progress")}
                    label="View My Order" background="bg-gray-500" />
            </div>
        </div>
    )
};

export default SuccessOrder;