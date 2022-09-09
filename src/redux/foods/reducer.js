import { foodsType } from "../actionType"

const initialState = {
    banner: {
        loading: false,
        data: []
    },

    newTaste: {
        loading: false,
        data: []
    },

    popular: {
        loading: false,
        data: []
    },

    recommended: {
        loading: false,
        data: []
    }
}

const foods = (state = initialState, action) => {

    if (action.type === foodsType.BANNER) {
        return {
            ...state,
            banner: {
                ...state.banner,
                data: action.payload,
            }
        }
    }

    if (action.type === foodsType.BANNER_LOADING) {

        return {
            ...state,
            banner: {
                ...state.banner,
                loading: action.payload
            }
        }
    }

    if (action.type === foodsType.NEW_TASTE) {
        return {
            ...state,
            newTaste: {
                ...state.newTaste,
                data: action.payload,
            }
        }
    }

    if (action.type === foodsType.NEW_TASTE_LOADING) {

        return {
            ...state,
            newTaste: {
                ...state.newTaste,
                loading: action.payload
            }
        }
    }

    if (action.type === foodsType.POPULAR) {
        return {
            ...state,
            popular: {
                ...state.popular,
                data: action.payload,
            }
        }
    }

    if (action.type === foodsType.POPULAR_LOADING) {

        return {
            ...state,
            popular: {
                ...state.popular,
                loading: action.payload
            }
        }
    }

    if (action.type === foodsType.RECOMMENDED) {
        return {
            ...state,
            recommended: {
                ...state.recommended,
                data: action.payload,
            }
        }
    }

    if (action.type === foodsType.RECOMMENDED_LOADING) {

        return {
            ...state,
            recommended: {
                ...state.recommended,
                loading: action.payload
            }
        }
    }

    return state
}

export default foods