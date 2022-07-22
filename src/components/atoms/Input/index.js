import React from 'react'

const Input = ({label, ...props }) => {
    return (
        <div className='flex flex-col'>
            <label className='mb-2'>{label}</label>
            <input {...props} className='border border-gray-900 p-2 rounded-lg focus:border-green-300' />
        </div>
    )
}

export default Input