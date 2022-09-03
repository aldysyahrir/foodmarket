import { globalType } from "../actionType";


const initialState = {
    isLoading: false,
    allert: {
        show: false,
        message: "",
    }
}

const global = (state = initialState, action) => {
    if (action.type === globalType.IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload,
        }
    }

    if (action.type === globalType.ALLERT) {
        return {
            ...state,
            allert: action.payload,
        }
    }
    return state
}

export default global;