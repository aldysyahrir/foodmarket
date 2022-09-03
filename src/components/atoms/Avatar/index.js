import React from 'react'

const Avatar = ({ value, onChange, image, ...rest }) => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-28 h-28 border border-dashed rounded-full flex justify-center items-center'>
                <label className='cursor-pointer'>
                    {image === "" ? (
                        <div className='cursor-pointer w-24 h-24 bg-gray-100 rounded-full flex justify-center items-center'>
                            <p className='text-sm font-light text-gray-500'>
                                Add <br /> Photo</p>
                        </div>
                    ) : (
                        <div className='w-24 h-24 bg-gray-100 rounded-full overflow-hidden'>
                            <img src={image} className='h-28 object-cover object-center' />
                        </div>
                    )}
                    <input {...rest} className='hidden' type='file' onChange={onChange} />
                </label>
            </div>
        </div>
    )
}

export default Avatar