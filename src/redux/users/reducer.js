import { userType } from "../actionType";


const initialState = {
    isLoading: false,
    registerData: {
        name: "",
        email: "",
        password: ""
    },
}

const user = (state = initialState, action) => {
    if (action.type === userType.IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload,
        }
    }
    if (action.type === userType.REGISTER_DATA) {
        return {
            ...state,
            registerData: action.payload,
        }
    }
    return state
}

export default user;