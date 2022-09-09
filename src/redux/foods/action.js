import { foodsType } from "../actionType";

export const bannerAction = (payload) => ({
    type: foodsType.BANNER,
    payload
})

export const bannerLoadingAction = (payload) => ({
    type: foodsType.BANNER_LOADING,
    payload
})

export const newTasteAction = (payload) => ({
    type: foodsType.NEW_TASTE,
    payload
})

export const newTasteLoadingAction = (payload) => ({
    type: foodsType.NEW_TASTE_LOADING,
    payload
})

export const popularAction = (payload) => ({
    type: foodsType.POPULAR,
    payload
})

export const popularLoadingAction = (payload) => ({
    type: foodsType.POPULAR_LOADING,
    payload
})

export const recommendedAction = (payload) => ({
    type: foodsType.RECOMMENDED,
    payload
})

export const recommendedLoadingAction = (payload) => ({
    type: foodsType.RECOMMENDED_LOADING,
    payload
})