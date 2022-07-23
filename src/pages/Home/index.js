import React, { useState } from 'react'
import ScrollContainer from "react-indiana-drag-scroll"
import { ILAvatar, ILFood1, ILFood2 } from '../../assets';
import { BottomNav, FoodCard, Header, Tabitems, Listitems } from '../../components';

const Home = () => {
  const [Activeitems, setActiveitems,] = useState(0);
  const [items] = useState([
    { key: 0, tittle: 'New Taste' },
    { key: 1, tittle: 'Popular' },
    { key: 2, tittle: 'Recommended' },
  ]);
  return (
    <div className='w-full flex flex-col max-h-screen'>
      <div className='flex flex-col flex-1 bg-gray-100'>
        <Header tittle="FoodMarket" desc="Let's get some food" withAvatar={ILAvatar} />

        <ScrollContainer horizontal className='h-64 overflow-hidden flex flex-row items-center'>

          <FoodCard image={ILFood1} tittle="Sanggara" star={3} />
          <FoodCard image={ILFood2} tittle="Pisang Ijo" star={5} />
          <FoodCard image={ILFood1} tittle="Barongko" star={4} />
          <FoodCard image={ILFood2} tittle="Bandang-bandang" star={2} />
        </ScrollContainer>
        <Tabitems
          Activeitems={Activeitems}
          setActiveitems={setActiveitems}
          items={items}>
          <ScrollContainer vertical className='list-container home'>
            <Listitems image={ILFood1} tittle='Sanggara' price='IDR 4.509.000' star={3} page='home' />

          </ScrollContainer>

        </Tabitems>
      </div>
      <BottomNav page='home' />
    </div>
  )
}

export default Home