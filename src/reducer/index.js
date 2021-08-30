import RegisterLogin from "./reducers";
import { combineReducers} from 'redux'

const rootReducer = combineReducers({
    RegisterLogin:RegisterLogin
})
export default rootReducer