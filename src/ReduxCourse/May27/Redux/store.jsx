import { legacy_createStore} from 'redux'
import { reducerFunction } from './reducer'

const reduxStore=legacy_createStore(reducerFunction)