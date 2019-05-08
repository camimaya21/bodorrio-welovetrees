import { USER_UPDATED, USER_LOGOUT, AUTH_ERROR } from '../actions'

const initialState = {
    user: null,
    error: null
  }

export default function(state = initialState, action){
    switch(action.type){
        case USER_UPDATED:
            return {
                ...state,
                user: action.payload
            }
        
        case USER_LOGOUT:
            return {
                ...initialState
            }

        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}