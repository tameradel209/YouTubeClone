import {createStore, combineReducers} from 'redux'
import {Data, Theme} from './Reducers'

export const ConfigureStore = () =>{
    const store = createStore(combineReducers({
        Data,
        Theme
    }))
    return store
}