import React, { useState } from 'react'
import { ILFood1 } from '../../../assets';
import Listitems from '../Listitems';
import ScrollContainer from 'react-indiana-drag-scroll'
import TabNavitems from './TabNavitems';

const Tabitems = ({ items, Activeitems, setActiveitems, children }) => {
    return (
        <div className='bg-white flex flex-col'>
            <div className='h-9 border-b w-full flex justify-around items-center'>
                {items.map(({ key, tittle }) => (
                    <TabNavitems
                        key={` ${key}_${tittle}`}
                        active={key === Activeitems}
                        onClick={() => setActiveitems(key)}
                        tittle={tittle}
                    />
                ))}
            </div>
                    {children}
        </div>
    )
}

export default Tabitems