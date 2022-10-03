import {combineReducers} from "redux"
import countReducer from "./countReducer"
import taskReducer from "./taskReducer"

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    countReducer: countReducer
})

export default rootReducer