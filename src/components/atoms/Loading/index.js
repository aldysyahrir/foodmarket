import React from 'react'

const Loading = ({ loading }) => {
    if (loading) {
        return (
            <div className='absolute
            flex flex-1 
            justify-center 
            items-center 
            w-full 
            h-full
            bg-black
            bg-opacity-50'>
                <div id="loading" className='flex justify-center items-center'>
                    <div id="children" className='w-3 h-6 mx-1' />
                    <div id="children" className='w-3 h-6 mx-1' />
                    <div id="children" className='w-3 h-6 mx-1' />
                    <div id="children" className='w-3 h-6 mx-1' />
                    <div id="children" className='w-3 h-6 mx-1' />
                </div>
            </div>
        );
    }

    return <div />
}

export default Loading