import { applyMiddleware, combineReducers, createStore } from 'redux'

import MemoriesReducer from './memories.reducer'
import UserReducer from "./user.reducer"
import thunk from 'redux-thunk'

// reducers


const RootReducer = combineReducers({
    memories: MemoriesReducer,
    user : UserReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))

