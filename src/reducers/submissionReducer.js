import { actionTypes } from "../action/actionTypes";

const initState = {
    submissions: []
}

export const submissionReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SUBS:
            return action.submissions
        default:
            return state
    }
}