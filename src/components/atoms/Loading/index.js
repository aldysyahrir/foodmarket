import React from 'react'
import { useSelector, shallowEqual, } from 'react-redux';
import { isLoadingSelector } from '../../../redux';

const Loading = ({ loading }) => {
    const userLoading = useSelector(isLoadingSelector, shallowEqual);
    if (loading || userLoading) {
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