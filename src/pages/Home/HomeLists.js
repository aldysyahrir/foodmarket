import React, { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Listitems } from '../../components'
import { foods } from '../../configs/constans'
import { globalAllertAction, newTasteAction, newTasteLoadingAction, newTasteSelector, popularAction, popularLoadingAction, popularSelector, recommendedAction, recommendedLoadingAction, recommendedSelector } from '../../redux'
import { createParams } from '../../utils'

const HomeLists = ({ activeItems }) => {
    const dispatch = useDispatch();
    const newTaste = useSelector(newTasteSelector, shallowEqual)
    const popular = useSelector(popularSelector, shallowEqual)
    const recommended = useSelector(recommendedSelector, shallowEqual)

    const getNewTaste = () => {

        dispatch(newTasteLoadingAction(true))
        foods.getAllFood().then((res) => {
            dispatch(newTasteLoadingAction(false))
            dispatch(newTasteAction(res.data))
        })
            .catch((err) => {
                const { message } = err.response.data;
                dispatch(globalAllertAction({ show: true, message }));
                dispatch(newTasteLoadingAction(false))
            })
    }

    const getPopular = () => {
        dispatch(popularLoadingAction(true))
        const params = createParams(["key=popular"])
        foods.getAllFood(params).then(res => {
            dispatch(popularAction(res.data))
            dispatch(popularLoadingAction(false))
        })
            .catch((err) => {
                const { message } = err.response?.data;
                dispatch(globalAllertAction({ show: true, message }))
                dispatch(popularLoadingAction(false))
            })
    }

    const getRecommended = () => {
        dispatch(recommendedLoadingAction(true))
        const params = createParams(["key=recommended"])
        foods.getAllFood(params)
            .then(res => {
                dispatch(recommendedLoadingAction(false))
                dispatch(recommendedAction(res.data))
            })
            .catch(err => {
                const { message } = err.response?.data;
                dispatch(globalAllertAction({ show: true, message }))
                dispatch(recommendedLoadingAction(false))
            })
    }

    useEffect(() => {
        if (activeItems === 1) {
            getPopular()
        } else if (activeItems === 2) {
            getRecommended()
        } else {
            getNewTaste()
        }
    }, [activeItems])

    const data = activeItems === 1 ? popular : activeItems === 2 ? recommended : newTaste;


    return (
        <ScrollContainer vertical className='list-container home'>
            {data.data?.map(item => (
                <Listitems key={item.id} data={item} page='home' loading={data.loading} />
            ))}
        </ScrollContainer>
    )
}

export default HomeLists