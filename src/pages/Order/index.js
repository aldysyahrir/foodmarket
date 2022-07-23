import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { ILFood1 } from '../../assets';
import { BottomNav, Gap, Header, Listitems, Tabitems } from '../../components'

const Order = () => {
  const [Activeitems, setActiveitems,] = useState(0);
  const [items] = useState([
    { key: 0, tittle: 'In Progress' },
    { key: 1, tittle: 'Past Order' },
  ]);
  return (
    <div className='w-full flex flex-col'>
      <div className='flex-1'>
        <Header tittle='Your Order' desc='Wait For The Best meal' />
        <Gap height={24} className='bg-gray-100' />
        <Tabitems
          Activeitems={Activeitems}
          setActiveitems={setActiveitems}
          items={items}>
          <ScrollContainer vertical className='list-container order'>
            <Listitems image={ILFood1} tittle='Sanggara' price='IDR 4.509.000' star={3} page='order' items='3 items' />

          </ScrollContainer>
        </Tabitems>
      </div>
      <BottomNav
        page='order'
      />
    </div>
  );
};

export default Order