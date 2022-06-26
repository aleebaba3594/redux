import counterReducer from "./Counter"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    counterReducer  // here we can add more reducers to the rootReducer object  like here we have only counterReducer this reducer if we have cahngeSelection reducer or anything like that we can add that reducer here as well to combine all reducers to rootReducer object.
})

export default rootReducer