import { userType } from "../actionType";


const initialState = {
    token: "",
    refreshToken: "",
    isLogin: false,
    registerData: {
        name: "",
        email: "",
        password: "",
        avatar: ""
    },
    data: {
        address: "",
        avatar: "",
        city: "",
        email: "",
        house_number: "",
        id: "",
        name: "",
        phone: null,
        rules: ""
    }
}

const user = (state = initialState, action) => {
    if (action.type === userType.USER_DATA) {
        return {
            ...state,
            data: action.payload,
        }
    }
    if (action.type === userType.REGISTER_DATA) {
        return {
            ...state,
            registerData: action.payload,
        }
    }
    if (action.type === userType.TOKEN) {
        return {
            ...state,
            token: action.payload
        }
    }
    if (action.type === userType.REFRESH_TOKEN) {
        return {
            ...state,
            refreshToken: action.payload,
        }
    }
    if (action.type === userType.IS_LOGIN) {
        return {
            ...state,
            isLogin: action.payload,
        }
    }
    if (action.type === userType.CLEAR_PASSWORD) {
        return {
            ...state,
            registerData: {
                ...state.registerData,
                password: ""
            }
        }
    }
    return state
}

export default user;