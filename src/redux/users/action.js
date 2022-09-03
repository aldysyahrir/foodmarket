import { userType } from "../actionType";

export const registerDataAction = (payload) => ({
    type: userType.REGISTER_DATA,
    payload,
});

export const tokenDataAction = (payload) => ({
    type: userType.TOKEN,
    payload
});

export const refreshTokenDataAction = (payload) => ({
    type: userType.REFRESH_TOKEN,
    payload
});

export const isLoginAction = (payload) => ({
    type: userType.IS_LOGIN,
    payload
});

export const clearPasswordAction = () => ({
    type: userType.CLEAR_PASSWORD,
});

export const userDataAction = (payload) => ({
    type: userType.USER_DATA,
    payload
})