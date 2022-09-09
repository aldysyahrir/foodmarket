import React, { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { FoodCard } from '../../components'
import { foods } from '../../configs/constans';
import { bannerAction, bannerLoadingAction, bannerSelector, globalAllertAction } from '../../redux';
import { createParams } from '../../utils';

const Banner = () => {
    const dispatch = useDispatch();
    const banner = useSelector(bannerSelector, shallowEqual);

    useEffect(() => {
        dispatch(bannerLoadingAction(true))
        const params = createParams(["key=banner"]);
        foods.getAllFood(params).then((res) => {
            dispatch(bannerLoadingAction(false))
            dispatch(bannerAction(res.data))
        })
            .catch((err) => {
                const { message } = err.response.data;
                dispatch(globalAllertAction({ show: true, message }));
                dispatch(bannerLoadingAction(false))
            })

    }, [])


    return (
        <ScrollContainer horizontal className='h-64 overflow-hidden flex flex-row items-center'>

            {banner.data?.map(item => (
                <FoodCard key={item.id} data={item} loading={banner.loading} />
            ))}

        </ScrollContainer>
    )
}

export default Banner