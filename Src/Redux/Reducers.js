import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {data:[], loading:false, error:null}

export const Data = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.LOADING :
            return {...state, loading:true, error: null}
        case ActionTypes.FETCH_DATA :
            return {...state, data:action.payload, loading:false, error: null}
        case ActionTypes.ERROR :
            return {...state, loading:false, error: action.payload}
        default:
            return state
    }
}

export const Theme = (state=false, action) =>{
    switch(action.type){
        case ActionTypes.CHANGE_THEME:
            return action.payload
        default :
            return state
    }
}