import { userType } from "../actionType";


const initialState = {
    isLoading: false,
    user: "aldy"
}

const user = (state = initialState, action) => {
    if (action.type === userType.IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload,
        }
    }
    if (action.type === userType.USER) {
        return {
            ...state,
            user: action.payload,
        }
    }
    return state
}

export default user;