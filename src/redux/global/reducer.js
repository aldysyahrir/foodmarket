import { globalType } from "../actionType";


const initialState = {
    allert: {
        show: false,
        message: "",
    }
}

const global = (state = initialState, action) => {
    if (action.type === globalType.ALLERT) {
        return {
            ...state,
            allert: action.payload,
        }
    }
    return state
}

export default global;