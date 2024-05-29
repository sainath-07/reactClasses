import { legacy_createStore} from 'redux'
import { reducerFunction } from './reducer'

export const reduxStore=legacy_createStore(reducerFunction)