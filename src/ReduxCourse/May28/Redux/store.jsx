import { applyMiddleware, legacy_createStore} from 'redux'
import { singleReducer } from './Combinereducer'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';



export const May28Store=legacy_createStore(
    singleReducer,
    composeWithDevTools(applyMiddleware(thunk))
)