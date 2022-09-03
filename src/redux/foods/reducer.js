import { foodsType } from "../actionType"

const initialState = {
    allFoods: {
        loading: false,
        data: []
    }
}

const foods = (state = initialState, action) => {

    if (action.type === foodsType.ALL_FOODS) {
        return {
            ...state,
            allFoods: {
                loading: false,
                data: action.payload,
            }
        }
    }

    return state
}

export default foods