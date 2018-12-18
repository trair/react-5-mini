import reducer from './ducks/counter'
import {createStore} from 'redux'

const store = createStore(reducer)

export default store