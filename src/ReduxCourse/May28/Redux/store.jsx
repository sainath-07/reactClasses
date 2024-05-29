import { legacy_createStore} from 'redux'
import { singleReducer } from './Combinereducer'


export const May28Store=legacy_createStore(singleReducer)