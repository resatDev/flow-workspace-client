import { actionTypes } from "../action/actionTypes";

const initState = [];

export const eventReducer = (state = initState, action) => {
    switch (action.type){
        case actionTypes.EVENTS:
            return action.events
        default: 
            return state
    }
}